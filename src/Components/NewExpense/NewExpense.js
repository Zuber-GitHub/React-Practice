import react, {useState} from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDateHandler = (enetredExpenseData)=>
    {
        const expenseData = {
        ...enetredExpenseData,
        id:Math.random().toString()
        }
        props.onAddExpense(expenseData)
        setIsEditing(false)
    }

    const startEditingHandler = ()=>{
        setIsEditing(true)

    }

    const stopEditingHandler = ()=>{
        setIsEditing(false)
    }

    return(
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDateHandler} onCancel={stopEditingHandler}></ExpenseForm>}

        </div>

    )

}
export default NewExpense;