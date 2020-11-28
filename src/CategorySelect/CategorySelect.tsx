import React, {useState} from "react";
import useTransactionsCategories from "../useTransactionCategories";
import CategorySelectModal from "./CategorySelectModal";
import {Input} from "antd";

interface Props {
  onChange?: (value: number) => void;
}


const CategorySelect: React.FC<Props> = ({onChange}) => {
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
    name = "All"
  }

  return <div>
    <CategorySelectModal
      visible={modalVisible}
      close={() => {
        setModalVisible(false)
      }}
      onOk={(value) => {
        setSelectCategoryId(value)
        if(onChange) {
          onChange(value)
        }
        setModalVisible(false)
      }}/>
    <Input value={name} onClick={() => setModalVisible(true)}>
    </Input>
  </div>
}


export default CategorySelect;