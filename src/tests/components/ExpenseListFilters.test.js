import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from './../../components/ExpenseListFilters'
import { filter1, filter2 } from './../fixtures/filters'
import moment from 'moment'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters
            filters={filter1}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
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
    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(sortByDate).toHaveBeenCalled()
})

test('should sort by amount', () => {
    const value = 'amount'
    wrapper.find('select').simulate('change', {
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

