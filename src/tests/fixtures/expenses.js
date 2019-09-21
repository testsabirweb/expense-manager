import moment from 'moment'

const expenses= [{
  id: '1',
  description: 'gum',
  note: '',
  amount: 159,
  createdAt: 0
}, {
  id: '2',
  description: 'rent',
  note: '',
  amount: 15000,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'coffee',
  note: '',
  amount: 45,
  createdAt: moment(0).add(4, 'days').valueOf()
}];

module.exports=expenses