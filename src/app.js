import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { createStore } from "redux";
//import reducer from "../reducers/index";
import moment from 'moment';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

store.dispatch(addExpense({description:'Water bill', amount: 7000 , createdAt: moment().format()}));
store.dispatch(addExpense({description:'Rent bill', amount: 17000 , createdAt: moment().format()}));
store.dispatch(addExpense({description:'Gas bill'}));


const state = store.getState();
const visibleExpenses= getVisibleExpenses(state.expenses,state.filters);
console.log(visibleExpenses)

console.log(store.getState());
  
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

  ReactDOM.render(jsx, document.getElementById('app'));