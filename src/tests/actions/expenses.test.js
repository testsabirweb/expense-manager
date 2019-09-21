const { addExpense, editExpense, removeExpense } = require('./../../actions/expenses')

test('remove expense testing', () => {
    const action = removeExpense({ id: '1234asdf' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '1234asdf'
    })
})

test('edit expense testing', () => {
    const action = editExpense('asdf', { note: 'this is something' })

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'asdf',
        updates: {
            note: 'this is something'
        }
    })
})

test('add expense with values provided', () => {
    const data = {
        description: 'rent',
        amount: '145',
        createdAt: 1000,
        note: 'this is a note'
    }

    const result = addExpense(data)
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...data,
            id: expect.any(String)
        }
    })
})

test('add expense with default values', () => {
    const result = addExpense()
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            amount: 0,
            note:'',
            createdAt:0,
            id: expect.any(String)
        }
    })
})