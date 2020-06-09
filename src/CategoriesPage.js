import React from "react";
import useTransactionCategoriesTree from "./useTransactionCategoriesTree";
import {Link} from "react-router-dom";

const CategoriesTree = ({tree}) => {
  return <div style={{marginLeft: "0.5rem"}}>
    <div>{tree.name}</div>
    {tree.children && tree.children.map(t => <CategoriesTree tree={t}/>)}
  </div>
}

const CategoriesPage = () => {
  const [tree] = useTransactionCategoriesTree()
  if (!tree) {
    return <div>Loading</div>
  }

  return <div>
    <Link to='/categories/create'>Create</Link>
    <CategoriesTree tree={tree}/>
  </div>
}

export default CategoriesPage;