import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';

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
        <li><Link to='/'>Home</Link></li>
        <li><Link to='create'>Add</Link></li>
        <li><Link to='/edit'>Edit</Link></li>
        <li><Link to='/help'>Help</Link></li>
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
