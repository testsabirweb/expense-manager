import moment from 'moment'

const expenses = [{
  id: '1',
  description: 'gum',
  note: '',
  amount: 159,
  createdAt: 0,
  category: 'expense'
}, {
  id: '2',
  description: 'rent',
  note: '',
  amount: 15000,
  createdAt: moment(0).subtract(4, 'days').valueOf(),
  category: 'expense'
}, {
  id: '3',
  description: 'coffee',
  note: '',
  amount: 45,
  createdAt: moment(0).add(4, 'days').valueOf(),
  category: 'saving'
}];

module.exports = expenses