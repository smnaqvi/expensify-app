import {createStore} from 'redux';

// Action generators

const incrementCount = ({incrementBy = 1} = {}) => ({
        type: 'INCREMENT',
        incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count}) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type : 'RESET'
})

// reducers


const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
      
        return {
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
       
        return {
            count: state.count - action.decrementBy
        };
        case 'SET':
        return {
            count: action.count
        }
        case 'RESET':
        return {
            count:  0
        };
        default:
        return state;
    }
    
}

const store = createStore();

console.log(store.getState());

store.dispatch(incrementCount({ incrementBy: 5}))
console.log(store.getState());

store.dispatch(decrementCount({ decrementBy: 15}))
console.log(store.getState());

store.dispatch(resetCount())

store.dispatch(setCount({count : 101}));

console.log(store.getState());