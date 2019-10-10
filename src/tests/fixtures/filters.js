import moment from 'moment'

const filter1 = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filter2 = {
    text: 'rent',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
}

export { filter1, filter2 }