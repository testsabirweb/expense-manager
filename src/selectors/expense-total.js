export default (expenses) => {
    let total = 0;
    expenses.forEach((expense) => {
        if (expense.category === 'expense') {
            total = total - expense.amount
        } else {
            total = total + expense.amount
        }
    });
    return total
}