import React from 'react';
import {shallow} from 'enzyme';
import { ExpensesSummary } from "../../Components/ExpensesSummary";

test('should render summary correctly with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={1955} />)
    expect(wrapper).toMatchSnapshot();
})

test('should render summary correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={19522} />)
    expect(wrapper).toMatchSnapshot();
})