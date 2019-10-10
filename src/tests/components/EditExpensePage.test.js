import React from 'react'
import {shallow} from 'enzyme'
import expenses from './../fixtures/expenses'
import {EditExpensePage }from './../../components/EditExpensePage'

let editExpenseSpy,removeExpenseSpy,wrapper,historySpy;

beforeEach(()=>{
    editExpenseSpy=jest.fn();
    removeExpenseSpy=jest.fn();
    historySpy={push:jest.fn()};
    wrapper=shallow(
        <EditExpensePage 
            editExpense={editExpenseSpy}
            removeExpense={removeExpenseSpy}
            history={historySpy}
            expense={expenses[2]}
        />
    )
})
test('should render ', () => {
    expect(wrapper).toMatchSnapshot()
})

