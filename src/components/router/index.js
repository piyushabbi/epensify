import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AddExpensePage from '../pages/AddExpensePage';
import {AboutPage} from '../pages/AboutPage';
import {NotFoundPage} from '../pages/NotFoundPage';
import Header from '../Header';
import Dashboard from '../Dashboard';

const EditExpense = () => (
  <div>Edit Expense Page</div>
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
