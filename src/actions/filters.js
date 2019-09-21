
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

module.exports={
    setTextFilter,
    sortByAmount,
    sortByDate,
    setStartDate,
    setEndDate
}