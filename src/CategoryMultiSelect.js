import useTransactionsCategories from "./useTransactionCategories";
import React from "react";
import {Tree} from 'antd';
import useTransactionCategoriesTree from "./useTransactionCategoriesTree";

const CategoryMultiSelect = ({onChange}) => {
  const [categories] = useTransactionCategoriesTree()
  if (categories == null) {
    return <h1>Loading</h1>
  }

  const treeData = [buildTreeData(categories)]

  return <CategoryMultiSelectTree treeData={treeData}/>
}

const buildTreeData = (tree) => {
  return {
    title: tree.name,
    key: tree.id,
    children: tree.children.map(c => {
      return buildTreeData(c)
    })
  }
}

const CategoryMultiSelectTree = ({treeData}) => {
  return <Tree checkable treeData={treeData}/>
}
export default CategoryMultiSelect;