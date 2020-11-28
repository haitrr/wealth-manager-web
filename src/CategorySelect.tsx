import React, {FC, useState} from "react";
import useTransactionsCategories from "./useTransactionCategories";
import useTransactionCategoriesTree, {CategoryTree} from "./useTransactionCategoriesTree";
import {Modal, TreeSelect} from "antd";

interface CategorySelectProps {
}

const CategorySelect = (props: CategorySelectProps) => {
  const categories = useTransactionsCategories()
  const [selectedCategoryId, setSelectCategoryId] = useState<null | number>(null)
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  if (categories == null) {
    return <h1>Loading</h1>
  }
  const selectCategory = categories.find(c => c.id === selectedCategoryId);
  let name;
  if (selectCategory) {
    name = selectCategory.name
  } else {
    name = "-"
  }

  console.log(modalVisible)
  return <div>
    <CategorySelectModal visible={modalVisible} close={() => {
      setModalVisible(false)
    }}/>
    <span onClick={() => setModalVisible(true)}>
    {name}
    </span>
  </div>
}

interface CategorySelectModalProps {
  visible: boolean;
  close: () => void;
}


const CategorySelectModal: FC<CategorySelectModalProps> = (props) => {
  const {visible, close} = props;
  const [tree] = useTransactionCategoriesTree()
  if (tree === null) {
    return <div/>
  }


  return <Modal
    visible={visible}
    onCancel={close}
    //style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
  >
    <CategoryTreeSelect/>
  </Modal>
}

const CategoryTreeSelect: React.FC = () => {
  const [categories] = useTransactionCategoriesTree()
  if (categories === null) {
    return <div>Loading</div>;
  }

  const renderTreeNodes = (cs: CategoryTree[]) => {
    return cs.map(c => {
      return <TreeSelect.TreeNode value={c.id} title={c.name}>
        {renderTreeNodes(c.children)}
      </TreeSelect.TreeNode>
    })
  }

  return <TreeSelect showSearch style={{width: "100%"}}>
    {renderTreeNodes([categories])}
  </TreeSelect>
}

export default CategorySelect;