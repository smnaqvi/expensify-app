import filtersReducer from "../../reducers/filters"
import moment from "moment";

test("should setup default filter values", () => {
    const state = filtersReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test("should set sortBy to amount", () => {
    const state = filtersReducer(undefined,{type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toEqual('amount');
});

test("should set sortBy to date", () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const state = filtersReducer(undefined,{type:'SORT_BY_DATE'});
    expect(state.sortBy).toEqual('date');
});

test("should set text filter", () => {
    
    const state = filtersReducer(undefined,{type:'SET_TEXT_FILTER',text:'test'});
    expect(state.text).toEqual('test');
});

test("should set startDate flter", () => {
    const state = filtersReducer(undefined,{type:'SET_START_DATE',startDate: moment(0).add(3,"days").valueOf()});
    expect(state.startDate).toEqual(moment(0).add(3,"days").valueOf());
});

test("should set endDate flter", () => {
    const state = filtersReducer(undefined,{type:'SET_END_DATE',endDate: moment(0).add(3,"days").valueOf()});
    expect(state.endDate).toEqual(moment(0).add(3,"days").valueOf());
});
    