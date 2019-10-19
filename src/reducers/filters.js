const moment = require('moment')

const filtersReducersDefault = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
    category: 'all'
}

const filtersReducers = (state = filtersReducersDefault, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        case 'SET_CATEGORY_ALL':
            return {
                ...state,
                category: 'all'
            }
        case 'SET_CATEGORY_EXPENSE':
            return {
                ...state,
                category: 'expense'
            }
        case 'SET_CATEGORY_SAVING':
            return {
                ...state,
                category: 'saving'
            }
        default:
            return state;
    }
}

module.exports = filtersReducers
