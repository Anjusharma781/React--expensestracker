import React, { useState } from 'react'
import "./Style.css";

const Expense = () => {
     const [input ,SetInput]= useState('');
     const [amount ,SetAmount]= useState('');
     const [expenses,SetExpenses]= useState([]);



     const addExpense=()=>{
        if(!input || !amount)return;

        const newExpense ={
            id: expenses.length + 1,
            title: input,
            amount: amount
            
        }
        SetExpenses([...expenses,newExpense])
        SetInput('')
        SetAmount('')

     };
     const deleteExpense = (id)=>{
        SetExpenses(expenses.filter
        ((expenses)=> expenses.id !== id))
     }
     
  return (
    <div className=''>
        <h2>Expense Tracker</h2>
        <div>
            <input type="text"  placeholder='Expense' value={input} onChange={(e)=>SetInput(e.target.value)}/>
            <input type="number" placeholder='Amount'value={amount} onChange={(e)=>SetAmount(e.target.value)}/>
            <button onClick={addExpense}>Add Expense</button>
        </div>
        <ul className='Expense-list'>
            {
                expenses.map((Expense)=>(
                    <li key={Expense.id}>
                        <span>{Expense.title}</span>
                        <span>{Expense.amount}</span>
                        <button onClick={()=>deleteExpense (Expense.id)}>Delete</button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Expense