import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../Header';
import Dashboard from '../Dashboard';

/**
 * TODO: Routes
 * Dashboard Page
 * Add Expense Page
 * Edit Expense Page
 * About Page
 * Not Found Page
 */

const AppRouter = () => {
  return (
    <div>
      <Header title="Expensify" />
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Dashboard} />
        </Switch>
    </BrowserRouter>
    </div>
  );
}

export default AppRouter;
