import React from "react";
import {Link} from "react-router-dom";

const BudgetsPage = () => {
  return <div>
    <h1>Budgets</h1>
    <Link to="/budgets/create">Create new budget</Link>
  </div>
}

export default BudgetsPage;