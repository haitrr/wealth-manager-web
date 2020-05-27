import React from "react";
import useTransactionCategoriesTree from "./useTransactionCategoriesTree";

const CategoriesTree = ({tree}) => {
  return <div style={{marginLeft: "0.5rem"}}>
    <div>{tree.name}</div>
    {tree.children && tree.children.map(t => <CategoriesTree tree={t}/>)}
  </div>
}

const CategoriesPage = () => {
  const [tree] = useTransactionCategoriesTree()
  if(!tree) {
    return <div>Loading</div>
  }
  console.log(tree)

  return <CategoriesTree tree={tree}/>
}

export default CategoriesPage;