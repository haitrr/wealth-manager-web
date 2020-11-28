import React, {FC, useState} from "react";
import useTransactionCategoriesTree from "../useTransactionCategoriesTree";
import {Modal} from "antd";
import CategoryTreeSelect from "./CategoryTreeSelect";

interface CategorySelectModalProps {
  visible: boolean;
  close: () => void;
  onOk: (selectedId: number) => void;
}


const CategorySelectModal: FC<CategorySelectModalProps> = (props) => {
  const {visible, close, onOk} = props;
  const [tree] = useTransactionCategoriesTree()
  const [selected, setSelected] = useState<number>(-1)
  if (tree === null) {
    return <div/>
  }


  return <Modal
    visible={visible}
    onCancel={close}
    closable={false}
    onOk={()=> onOk(selected)}
  >
    <CategoryTreeSelect
      onChange={setSelected}
    />
  </Modal>
}

export default CategorySelectModal;
