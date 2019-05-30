import {addExpense,editExpense,removeExpense} from "../../actions/expenses";

test('should setup remove expense action object', () => {
    const action = removeExpense({id:'123'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: "123"    })
})

test('should setup edit expense action object', () => {
    const action = editExpense('123',{note:'1234'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: {
            note: '1234'
        }    });
});

test('should setup add expense action object with provided value', () => {
    const expenseData= {
        description: 'Rent',
        amount: 12334,
        createdAt: 1234,
        note: 'last rent'
    }    
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with default value', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
        id: expect.any(String),
        description : '',
        note : '',
        amount : 0,
        createdAt : 0
        }
    });
});