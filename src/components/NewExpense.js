import React from 'react'
import ExpenseForm from './ExpenseForm'

const NewExpense = ({addExpenseHandler}) => {
    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        // console.log(expenseData)
        addExpenseHandler(expenseData)
    }
  return (
    <div className='new-expense'>
        <ExpenseForm
            saveExpenseHandler={saveExpenseHandler}
        />
    </div>
  )
}

export default NewExpense