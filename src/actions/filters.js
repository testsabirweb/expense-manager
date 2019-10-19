
const setTextFilter = (text = '') => {
    return {
        type: 'SET_TEXT_FILTER',
        text
    }
}

const sortByAmount = () => {
    return {
        type: 'SORT_BY_AMOUNT'
    }
}

const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE'
    }
}

const setStartDate = (date) => {
    return {
        type: 'SET_START_DATE',
        startDate: date
    }
}

const setEndDate = (date) => {
    return {
        type: 'SET_END_DATE',
        endDate: date
    }
}

const setCategoryAll = () => {
    return {
        type: 'SET_CATEGORY_ALL'
    }
}

const setCategoryExpense = () => {
    return {
        type: 'SET_CATEGORY_EXPENSE'
    }
}

const setCategorySaving = () => {
    return {
        type: 'SET_CATEGORY_SAVING'
    }
}

module.exports = {
    setTextFilter,
    sortByAmount,
    sortByDate,
    setStartDate,
    setEndDate,
    setCategoryAll,
    setCategoryExpense,
    setCategorySaving
}