import React, {FC, useState} from "react";
import useTransactionsCategories from "./useTransactionCategories";
import Modal from '@material-ui/core/Modal';
import {Button, Paper} from "@material-ui/core";

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
  const categories = useTransactionsCategories()
  if (!categories) {
    return <div></div>
  }

  return <Modal
    open={visible}
    style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
  >
    <Paper>
      {categories.map(t => <div>{t.name}</div>)}
      <Button color="primary" onClick={close}>Close</Button>
    </Paper>
  </Modal>
}

export default CategorySelect;