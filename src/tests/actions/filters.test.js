const { setTextFilter,
    sortByAmount,
    sortByDate,
    setStartDate,
    setEndDate,
    setCategoryAll,
    setCategoryExpense,
    setCategorySaving
} = require('./../../actions/filters')

const moment = require('moment')

test('set start date testing', () => {
    const action = setStartDate(moment(0))

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('set end date testing', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('sort by amount testing', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('sort by date testing', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('set text filter testing default', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('set text filter testing with values', () => {
    const action = setTextFilter('value')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'value'
    })
})

test('set category to all', () => {
    const action = setCategoryAll()
    expect(action).toEqual({
        type: 'SET_CATEGORY_ALL'
    })
})

test('set category to expense', () => {
    const action = setCategoryExpense()
    expect(action).toEqual({
        type: 'SET_CATEGORY_EXPENSE'
    })
})


test('set category to saving', () => {
    const action = setCategorySaving()
    expect(action).toEqual({
        type: 'SET_CATEGORY_SAVING'
    })
})
