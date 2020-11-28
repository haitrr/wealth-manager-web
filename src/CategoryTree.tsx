import useTransactionCategoriesTree, {CategoryTree} from "./useTransactionCategoriesTree";
import {DataNode} from "antd/lib/tree";
import {Tree} from "antd";
import React from "react";

const buildTreeData = (root: CategoryTree[]): DataNode[] => {
  return root.map(tree => {
    return {title: tree.name, key: tree.id, children: buildTreeData(tree.children)}
  })
}

const CategoriesTree = () => {
  const [tree] = useTransactionCategoriesTree()
  if (!tree) {
    return <div>Loading</div>
  }
  const treeData = buildTreeData([tree])
  console.log(treeData)
  return <Tree treeData={treeData} showLine={true}/>
}

export default CategoriesTree;