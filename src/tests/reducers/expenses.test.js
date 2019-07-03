import expensesReducer from "../../reducers/expenses"
import expenses from "../fixtures/expenses";

test('should set default state', () => {
    const state = expensesReducer(undefined,{ type: '@@INIT'});
    expect (state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[0].id
    };
    const state = expensesReducer(expenses,action);
    expect (state).toEqual([expenses[1],expenses[2]]);
})

test('should not remove expense if id not found', () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: '-23'
    };
    const state = expensesReducer(expenses,action);
    expect (state).toEqual(expenses);
})

test('should add expense', () => {
    const expense = {
        id: '23',
        description: 'Gummy',
        note: '',
        amount: 1951,
        createdAt:0
    }
    const action = {
        type: "ADD_EXPENSE",
        expense
    };
    const state = expensesReducer(expenses,action);
    expect (state).toEqual([...expenses,expense]);
})

test('should edit expense', () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[0].id,
        updates: {
            amount : 1951
        }
    };
    const state = expensesReducer(expenses,action);
    expect (state[0].amount).toBe(1951);
})

test('should not edit expense if not found', () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: '1234',
        updates: {
            amount : 1951
        }
    };
    const state = expensesReducer(expenses,action);
    expect (state).toEqual(expenses);
})

test('should set expenses',() => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state=expensesReducer(expenses,action)
    expect(state).toEqual([expenses[1]])
});