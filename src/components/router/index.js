import React from 'react';
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  Link,
  NavLink
} from "react-router-dom";

import {ExpenseDashboardPage} from '../expenseDashboardPage';
import {AddExpensePage} from '../addExpensePage';
import {HelpPage} from '../helpPage';
import {Header} from '../header';
import {NotFoundPage} from '../notFoundPage';

const EditExpensePage = () => <div>Edit Expense Page</div>;

export const AppRouter = () => (
  <BrowserRouter>
    <section>
      <Header />
      <Switch>
        <Route exact path="/" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </section>
  </BrowserRouter>
);
