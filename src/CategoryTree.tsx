import React from "react";
import useTransactionCategoriesTree, {CategoryTree} from "./useTransactionCategoriesTree";
import {DataNode} from "antd/lib/tree";
import {Tree} from "antd";

export const buildTreeData = (root: CategoryTree[]): DataNode[] => {
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
  return <Tree defaultExpandAll treeData={treeData} showLine={true}/>
}

export default CategoriesTree;