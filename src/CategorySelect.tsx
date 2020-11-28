import React, {FC, useState} from "react";
import useTransactionsCategories from "./useTransactionCategories";
import Modal from '@material-ui/core/Modal';
import {Button, Paper} from "@material-ui/core";
import useTransactionCategoriesTree, {CategoryTree} from "./useTransactionCategoriesTree";
import {TreeItem, TreeView} from "@material-ui/lab";

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
    open={visible}
    style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
  >
    <Paper style={{minWidth: "30vw", minHeight: "30vh"}}>
      <Button color="primary" onClick={close}>Close</Button>
    </Paper>
  </Modal>
}

const CategoryTreeSelect: React.FC<{ categories: CategoryTree }> = ({categories}) => {
  return <TreeItem label={categories.name} nodeId={categories.id.toString()}>
    {categories.children && categories.children.map((c: any) => {
      return <CategoryTreeSelect categories={c}/>;
    })}
  </TreeItem>
}

export default CategorySelect;