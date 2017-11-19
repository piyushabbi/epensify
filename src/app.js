import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Router, Route, Switch, Link, NavLink } from 'react-router-dom';

import 'normalize-css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => <div>Expense Dashboard Page</div>;
const AddExpensePage = () => <div>Add Expense Page</div>;
const EditExpensePage = () => <div>Edit Expense Page</div>;
const HelpPage = () => <div>Help Page</div>;
const NotFoundPage = () => (
  <div>
    404! Page Not Found<br/>
    <Link to='/'>Home</Link>
  </div>
);
const Header = () => (
  <header>
    <h1>Expensify App</h1>
    <nav>
      <ul>
        <li><NavLink exact to='/' activeClassName="is-active">Home</NavLink></li>
        <li><NavLink to='/create' activeClassName="is-active">Add</NavLink></li>
        <li><NavLink to='/edit' activeClassName="is-active">Edit</NavLink></li>
        <li><NavLink to='/help' activeClassName="is-active">Help</NavLink></li>
      </ul>
    </nav>
  </header>
);

const routes = (
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

render(routes, document.getElementById('root'));
