import React,{useState} from 'react'
import './NewExpenses.css';
import ExpenseForm from './ExpenseForm';
function NewExpenses(props) {
  const [isEditing,setIsEditing]=useState(false);
  const saveHandler=(data)=>{
      const newData={
        ...data,
        id:Math.random().toString()
      };
      // console.log(newData);
      props.onData(newData);
      setIsEditing(false);
  }
  const editingHandler=()=>{
    setIsEditing(true);
  };
  const cancelHandler=()=>{
    setIsEditing(false);
  };
  return (
    <div className='new-expense'>
        {!isEditing && <button onClick={editingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onCancel={cancelHandler} onSave={saveHandler}/>}
    </div>
  )
}

export default NewExpenses;