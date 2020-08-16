import React from "react";
import {get} from "./httpClient";
import {getEndpoint} from "./api";

const buildCategoriesTree = (categories) => {
  const root = {name: "All", id : -1, children: []}
  categories.forEach(c => {
    if (!c.children) {
      c.children = []
    }
    if (c.parentId) {
      const parent = categories.find(t => t.id === c.parentId)
      if (parent.children) {
        parent.children.push(c)
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
