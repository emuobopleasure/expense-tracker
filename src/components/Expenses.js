import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'

const Expenses = ({items}) => {
    const [filteredYear, setFilteredYear] = useState('2021')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
        // console.log(filteredYear)
    }

    const filteredExpenses = items.filter((expense) => (
        expense.date.getFullYear().toString() === filteredYear
    ))

    return (
        <div className='expenses bg-[#42224a] px-[2rem] pt-[1rem] rounded-tl-[3rem] rounded-tr-[3rem] text-[#e7e3e8] fixed left-0 right-0 bottom-0 md:max-w-[900px] md:mx-auto'>
            <h1 className='title text-xl font-semibold mb-[1.5rem]'>
                Expenses
            </h1>
            <ExpensesFilter
                filteredYear={filteredYear}
                filterChangeHandler={filterChangeHandler}
            />
            <div className='expenses-list flex flex-col gap-8 h-[30vh] md:h-[40vh] lg:h-[30vh] overflow-y-auto'>
                {filteredExpenses.length === 0 && <p>No expenses found</p>} 
                {filteredExpenses.map((expense) => (
                    <ExpenseItem 
                    key={expense.id}
                    item={expense} 
                    />
                ))}
            </div>
        </div>
    )
}

export default Expenses