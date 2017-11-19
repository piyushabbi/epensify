import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Router, Route } from 'react-router-dom';

import 'normalize-css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => <div>Expense Dashboard Page</div>;
const AddExpensePage = () => <div>Add Expense Page</div>;
const EditExpensePage = () => <div>Edit Expense Page</div>;
const HelpPage = () => <div>Help Page</div>;

const routes = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={ExpenseDashboardPage} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
    </div>
  </BrowserRouter>
);

render(routes, document.getElementById('root'));
