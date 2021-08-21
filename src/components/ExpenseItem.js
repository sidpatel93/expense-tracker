import './ExpenseItem.css';


function ExpenseItem(props) {
    
    // date config object to store correct formated date from props.
    const dateConfig = {
        month: props.date.toLocaleString('en-US', {month: 'long'}),
        day: props.date.toLocaleString('en-US', {day: '2-digit'}),
        year: props.date.getFullYear()
    }

    return (
        <div className="expense-item">
            <div>
                <div>{dateConfig.month}</div>
                <div>{dateConfig.year}</div>
                <div>{dateConfig.day}</div>
            </div>  
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem