import React, { useState } from 'react';
import './ExpenseForm.css';
function ExpenseForm(props) {
    const [input,setInput]=useState({
        inputTitle:'',
        inputAmount:'',
        inputDate:''
    });
    const titleHandler=event=>{
        setInput((prev)=>{
            return{
                ...prev,
                inputTitle:event.target.value
            };
                });
    };
    const amountHandler=event=>{
        setInput((prev)=>{
            return{
                ...prev,
                inputAmount:event.target.value
            };
                });
    };
    const dateHandler=event=>{
        setInput((prev)=>{
            return{
                ...prev,
                inputDate:event.target.value
            };
                });
    };
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title:input.inputTitle,
            amount:+input.inputAmount,
            date:new Date(input.inputDate)
        };
        // console.log(expenseData);
        props.onSave(expenseData);
        setInput({
            inputTitle:'',
            inputAmount:'',
            inputDate:''
        })
    };

  return ( <form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' onChange={titleHandler} value={input.inputTitle}/>
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' min='0.01' step='0.01' onChange={amountHandler} value={input.inputAmount}/>
        </div>
        <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateHandler} value={input.inputDate}/>
        </div>
    </div>
    <div className='new-expense__actions'>
    <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
    </div>;
</form>)
}

export default ExpenseForm;