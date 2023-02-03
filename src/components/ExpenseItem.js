import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate'

const ExpenseItem = ({item}) => {
  const [expense, setExpense] = useState('')

  const clickHandler = () => {
    // console.log('clicked')
    setExpense('New expense')
  }
  return (
    <div className='expense-item bg-[#684e6e] px-[1.8rem] py-[1rem] rounded-[1.7rem] flex items-center justify-between'>
        <div>
          <ExpenseDate dateItem={item.date}/>
        </div>
        <div className='expense-title'>
          {item.title}
        </div>
        <div className='expense-price'>
          ${item.amount}
        </div>
    </div>
  )
}

export default ExpenseItem