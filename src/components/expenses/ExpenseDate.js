import React from 'react'
import './ExpenseDate.css';

function ExpenseDate(props) {

    // date config object to store correct formated date from props.
    const dateConfig = {
        month: props.date.toLocaleString('en-US', { month: 'long' }),
        day: props.date.toLocaleString('en-US', { day: '2-digit' }),
        year: props.date.getFullYear()
    }


    return (
        <div className="expense-date">
            <div className="expense-date__month">{dateConfig.month}</div>
            <div className="expense-date__year">{dateConfig.year}</div>
            <div className="expense-date__day">{dateConfig.day}</div>
        </div>
    )
}

export default ExpenseDate