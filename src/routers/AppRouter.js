import React from 'react';
import {BrowserRouter, Route, Switch, Link , NavLink} from 'react-router-dom';
import addExpensePage from '../Components/AddExpensePage';
import editExpensePage from '../Components/editExpensePage';
import ExpenseDashboardPage from '../Components/ExpenseDashboardPage';
import Header from '../Components/Header';
import HelpPage from '../Components/HelpPage';
import NotFoundPage from '../Components/NotFoundPage';

  const AppRouter = () => (
    <BrowserRouter>
    <div>
      <Header/>
      <Switch>
    <Route path="/" component={ExpenseDashboardPage} exact={true}/>
    <Route path="/create" component={addExpensePage}/>
    <Route path="/edit/:id" component={editExpensePage}/>
    <Route path="/help" component={HelpPage}/>
    <Route component={NotFoundPage} />
    </Switch>
    </div>
  </BrowserRouter>
  );
  
  export default AppRouter;