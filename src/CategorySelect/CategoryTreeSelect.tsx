import React from "react";
import useTransactionCategoriesTree from "../useTransactionCategoriesTree";
import {Tree} from "antd";
import {buildTreeData} from "../CategoryTree";

const CategoryTreeSelect: React.FC<{ onChange: (value: number) => void }> = ({onChange}) => {
  const onSelect = (selectedKeys: React.Key[]) => {
    if(selectedKeys.length === 0) throw new Error();
    onChange(selectedKeys[0] as number)
  }

  const [tree] = useTransactionCategoriesTree()
  if (!tree) {
    return <div>Loading</div>
  }
  const treeData = buildTreeData([tree])
  console.log(treeData)
  return <Tree
    defaultExpandAll
    selectable
    onSelect={onSelect}
    treeData={treeData}
    showLine={true}/>
}

export default CategoryTreeSelect;
