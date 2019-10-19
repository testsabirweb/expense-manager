const moment = require('moment')
const filtersReducers = require('./../../reducers/filters')

test('should setup default filter values', () => {
    const state = filtersReducers(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
        category: 'all'
    })
})

test('should set sort by  to amount', () => {
    const state = filtersReducers(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})

test('should set sort by to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const action = { type: 'SORT_BY_DATE' }
    const state = filtersReducers(currentState, action)
    expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
    const text = 'something'
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }
    const state = filtersReducers(undefined, action)
    expect(state.text).toBe(text)
})

test('should set startDate filter', () => {
    const startDate = moment()
    const action = {
        type: 'SET_START_DATE',
        startDate
    }
    const state = filtersReducers(undefined, action)
    expect(state.startDate).toBe(startDate)
})

test('should set endDate filter', () => {
    const endDate = moment()
    const action = {
        type: 'SET_END_DATE',
        endDate
    }
    const state = filtersReducers(undefined, action)
    expect(state.endDate).toBe(endDate)
})


test('should set category all', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined,
        category: 'expense'
    }
    const state = filtersReducers(currentState, { type: 'SET_CATEGORY_ALL' })
    expect(state.category).toBe('all')
})

test('should set category all', () => {
    const state = filtersReducers(undefined, { type: 'SET_CATEGORY_EXPENSE' })
    expect(state.category).toBe('expense')
})

test('should set category all', () => {
    const state = filtersReducers(undefined, { type: 'SET_CATEGORY_SAVING' })
    expect(state.category).toBe('saving')
})
