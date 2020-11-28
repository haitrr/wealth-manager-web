import React, {useState} from "react";
import useTransactionsCategories from "../useTransactionCategories";
import CategorySelectModal from "./CategorySelectModal";

const CategorySelect = () => {
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
        setModalVisible(false)
      }}/>
    <span onClick={() => setModalVisible(true)}>
    {name}
    </span>
  </div>
}


export default CategorySelect;