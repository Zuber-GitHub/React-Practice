import './ExpenseItems.css'
function ExpenseItem(props)
{   

    const  LocationOfExpenditure = 'Panjurli Hubli'
    return (
        <div className="expense-item">
            <div>{props.date}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2> 
                <h3>{props.location}</h3>
                <div className="expense-item__price">{props.amount}</div>
                
               
            </div>
        </div>
    );
    
}

export default ExpenseItem;