import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AddExpensePage from '../pages/AddExpensePage';
import EditExpensePage from '../pages/EditExpensePage';
import {AboutPage} from '../pages/AboutPage';
import {NotFoundPage} from '../pages/NotFoundPage';
import Header from '../Header';
import Dashboard from '../Dashboard';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header title="Expensify" />
        <Switch>
          <Route exact={true} path="/" component={Dashboard} />
          <Route path="/create" component={AddExpensePage} />
          <Route path="/edit/:id" component={EditExpensePage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
  </BrowserRouter>
  );
}

export default AppRouter;
