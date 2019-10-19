import moment from 'moment'

const filter1 = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
    category: 'all'
}

const filter2 = {
    text: 'rent',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days'),
    category: 'expense'
}

export { filter1, filter2 }