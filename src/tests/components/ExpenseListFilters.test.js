import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from './../../components/ExpenseListFilters'
import { filter1, filter2 } from './../fixtures/filters'
import moment from 'moment'

let setTextFilter,
    sortByDate,
    sortByAmount,
    setStartDate,
    setEndDate,
    setCategoryAll,
    setCategoryExpense,
    setCategorySaving,
    wrapper;

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    setCategoryAll = jest.fn()
    setCategoryExpense = jest.fn()
    setCategorySaving = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters
            filters={filter1}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setCategoryAll={setCategoryAll}
            setCategoryExpense={setCategoryExpense}
            setCategorySaving={setCategorySaving}
        />
    )
})

test('should render ExpenseListFilter on filter1', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilter on filter2', () => {
    wrapper.setProps({ filters: filter2 })
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
    const value = 'bill'
    wrapper.find('input').simulate('change', {
        target: { value }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('should sort by date', () => {
    const value = 'date'
    wrapper.setProps({ filters: filter2 })
    wrapper.find('select').at(1).simulate('change', {
        target: { value }
    })
    expect(sortByDate).toHaveBeenCalled()
})

test('should sort by amount', () => {
    const value = 'amount'
    wrapper.find('select').at(1).simulate('change', {
        target: { value }
    })
    expect(sortByAmount).toHaveBeenCalled()
})

test('should handle dates change', () => {
    const startDate = moment(0).add(20, "days")
    const endDate = moment(0).add(2, "years")
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate })
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('should handle date focus change', () => {
    const calendarFocused = 'startDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})

test('should set category all', () => {
    const value = 'all'
    wrapper.setProps({ filters: filter2 })
    wrapper.find('select').at(0).simulate('change', {
        target: { value }
    })
    expect(setCategoryAll).toHaveBeenCalled()
})

test('should set category expense', () => {
    const value = 'expense'
    wrapper.find('select').at(0).simulate('change', {
        target: { value }
    })
    expect(setCategoryExpense).toHaveBeenCalled()
})

test('should set category saving', () => {
    const value = 'saving'
    wrapper.find('select').at(0).simulate('change', {
        target: { value }
    })
    expect(setCategorySaving).toHaveBeenCalled()
})