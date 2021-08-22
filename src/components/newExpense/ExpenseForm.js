import React, {useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {

    const [enteredTitle, setenteredTitle] = useState("")
    const [enteredAmount, setEnteredAmount] = useState("")
    const [enteredDate, setEnteredDate] = useState("")

    //Single state object that will teack all three field states.
//    const [userInput, setUserInput] =  useState({
//         enteredTitle:"" ,
//         enteredAmount:"" ,
//         enteredDate:""
//     })
    const titleChangeHandler = (event) => {
        setenteredTitle(event.target.value)
        // When replying on previous state to updat state always use function passing method of react to update it to new state.
        // setUserInput((prevState) => {
        //     return({
        //         ...prevState,
        //         enteredTitle:event.title.value
        //     }) 
        // })
    }

    const amountChangehandler = (event) => {
        setEnteredAmount(event.target.value)
        
    }

    const dateChangehandler = (event) => {
        setEnteredDate(event.target.value)       
    }

    const submitHandler = (event) => {
        event.preventDefault(); // this will disable the default form submit action, which is to send request to http.
        
        // we store the expense data in an object.
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        // clear the input fields to empty
        setenteredTitle("");
        setEnteredAmount("");
        setEnteredDate("")
    }



    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type='text' value= {enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangehandler}/>
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangehandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" onSubmit={}>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm