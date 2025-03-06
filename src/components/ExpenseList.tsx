interface Expense {
    id: number,
    description: string,
    amount: number,
    category: string
}

interface Props {
    expenses: Expense[];
    handleDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, handleDelete }:Props) => {
  return (
    <table>
        <thead>
            <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        {expenses.map((expense) => (
            <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <td>
                    <button onClick={() => handleDelete(expense.id)}>Delete</button>
                </td>
            </tr>
        ))}
        </tbody>
        <tfoot>
            <th>Total</th>
            <th>${expenses.reduce((acc, expense) => (expense.amount + acc), 0).toFixed(2)}</th>
            <th></th>
            <th></th>
        </tfoot>
    </table>
  )
}

export default ExpenseList