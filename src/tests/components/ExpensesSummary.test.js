import React from 'react'
import {shallow} from 'enzyme'
import{ ExpensesSummary }from './../../components/ExpensesSummary'

test('should render expense summary with 1 expense ', () => {
    const wrapper=shallow(<ExpensesSummary expensesCount={1} expensesTotal={145} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render expense summary with multiple expense ', () => {
    const wrapper=shallow(<ExpensesSummary expensesCount={10} expensesTotal={147545556} />)
    expect(wrapper).toMatchSnapshot()
})