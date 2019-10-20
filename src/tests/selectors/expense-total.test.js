import selectExpenseTotal from './../../selectors/expense-total'
import expenses from './../fixtures/expenses'

test('should return 0 if no expenses', () => {
    const res=selectExpenseTotal([])
    expect(res).toBe(0)
})

test('should add up single expense', () => {
    const res=selectExpenseTotal([expenses[0]])
    expect(res).toBe(-159)
})

test('should add up multiple expense', () => {
    const res=selectExpenseTotal(expenses)
    expect(res).toBe(-15114)
})

