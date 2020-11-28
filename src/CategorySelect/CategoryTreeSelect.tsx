import React from "react";
import useTransactionCategoriesTree, {CategoryTree} from "../useTransactionCategoriesTree";
import {TreeSelect} from "antd";

const CategoryTreeSelect: React.FC<{ onChange: (value: number) => void }> = ({onChange}) => {
  const [categories] = useTransactionCategoriesTree()
  if (categories === null) {
    return <div>Loading</div>;
  }

  const renderTreeNodes = (cs: CategoryTree[]) => {
    return cs.map(c => {
      return <TreeSelect.TreeNode value={c.id} title={c.name}>
        {renderTreeNodes(c.children)}
      </TreeSelect.TreeNode>
    })
  }

  return <TreeSelect onChange={onChange} showSearch style={{width: "100%"}}>
    {renderTreeNodes([categories])}
  </TreeSelect>
}

export default CategoryTreeSelect;
