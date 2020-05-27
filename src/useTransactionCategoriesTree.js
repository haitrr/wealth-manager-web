import React from "react";
import {get} from "./httpClient";
import {getEndpoint} from "./api";

const buildCategoriesTree = (categories) => {
  const root = {name: "All", children: []}
  categories.forEach(c => {
    if (c.parentId) {
      const parent = categories.find(t => t.id === c.parentId)
      if (parent.children) {
        parent.children.push(c)
      } else {
        parent.children = [c]
      }
    } else {
      root.children.push(c)
    }
  })
  return root;
}

const useTransactionCategoriesTree = () => {
  const [tree, setTree] = React.useState(null)
  React.useEffect(() => {
    get(`${getEndpoint()}/transaction-categories`).then(data => {
      const tree = buildCategoriesTree(data.items)
      setTree(tree);
    })
  }, [])
  return [tree]
}

export default useTransactionCategoriesTree
