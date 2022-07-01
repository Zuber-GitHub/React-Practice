import react from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
    const saveExpenseDateHandler = (enetredExpenseData)=>
    {
        const expenseData = {
        ...enetredExpenseData,
        id:Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData = {saveExpenseDateHandler}></ExpenseForm>

        </div>

    )

}
export default NewExpense;