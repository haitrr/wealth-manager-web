import React from "react";
import {get} from "./httpClient";
import {getEndpoint} from "./api";

export interface CategoryTree {
  name: string;
  id: number;
  children: CategoryTree[];
}

const buildCategoriesTree = (categories: any): any => {
  const root: CategoryTree = {
    name: "All",
    id: -1,
    children: []
  }
  categories.forEach((c: any) => {
    if (!c.children) {
      c.children = []
    }
    if (c.parentId) {
      const parent = categories.find((t: any) => t.id === c.parentId)
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

const useTransactionCategoriesTree = (): [CategoryTree | null] => {
  const [tree, setTree] = React.useState<CategoryTree | null>(null)
  React.useEffect(() => {
    get(`${getEndpoint()}/transaction-categories`).then(data => {
      const tree = buildCategoriesTree(data.items)
      setTree(tree);
    })
  }, [])
  return [tree]
}

export default useTransactionCategoriesTree;