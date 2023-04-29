import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React,{useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';
function Expenses(props) {
  const [getYear,setGetYear]=useState('2020');
  const selectChanged=(year)=>{
    setGetYear(year);
  };
  console.log(getYear);
  const filteredYear=props.items.filter(exp=>{
    return exp.date.getFullYear().toString()===getYear;
  });
  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter onSelectChange={selectChanged} selectedYear={getYear}/>
      <ExpensesChart expenses={filteredYear}/>
     <ExpensesList year={filteredYear}/>
    </Card>
    </div>
  );
}

export default Expenses;