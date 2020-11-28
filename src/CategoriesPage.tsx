import React from "react";
import {Link} from "react-router-dom";
import CategoriesTree from "./CategoryTree";

const CategoriesPage = () => {

  return <div>
    <Link to='/categories/create'>Create</Link>
    <CategoriesTree/>
  </div>
}

export default CategoriesPage;