import database from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = (expense) => ({//for redux store
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {//for firebase
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',////setting default data
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).remove()
      .then(() => {
        dispatch(removeExpense({ id }))
      })
  }
}

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${id}`).update(updates)
      .then(() => {
        dispatch(editExpense(id, updates))
      })
  }
}

//SET_EXPENSE     FOR REDUX STORE
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
})
////START_SET_EXPENSES            ///FOR FETCHING DATA FROM FIREBASE
export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses`).once('value')
      .then((snapshot) => {
        const expenses = []
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          })
        })
        dispatch(setExpenses(expenses))
      })
  }
}