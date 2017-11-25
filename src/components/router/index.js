import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../Header';
import Dashboard from '../Dashboard';

const AddExpensePage = () => (
  <div>Add Expense Page</div>
);
const EditExpense = () => (
  <div>Edit Expense Page</div>
);
const AboutPage = () => (
  <div>About Page</div>
);
const NotFoundPage = () => (
  <div>404! Not Found</div>
);
const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header title="Expensify" />
        <Switch>
          <Route exact={true} path="/" component={Dashboard} />
          <Route path="/create" component={AddExpensePage} />
          <Route path="/edit" component={EditExpense} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
  </BrowserRouter>
  );
}

export default AppRouter;
