
const expensesReducersDefault = []

const expensesReducer = (state = expensesReducersDefault, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            const temp = state.filter(({ id }) => {
                return id !== action.id
            })
            return temp
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else {
                    return expense
                }
            })
        default:
            return state;
    }
}

module.exports=expensesReducer