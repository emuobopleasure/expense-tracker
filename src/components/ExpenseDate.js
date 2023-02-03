import React from 'react'

const ExpenseDate = ({dateItem}) => {

    const month = dateItem.toLocaleString('en-US', { month: 'long' })
    const day = dateItem.toLocaleString('en-US', { day: '2-digit' })
    const year = dateItem.getFullYear()

    return (
        <div className='expense-date border-[2px] border-white rounded-[1.5rem] px-4 py-2 flex flex-col justify-center items-center bg-[#250e2a] min-w-[6rem] md:min-w-[6.5rem]'>
            <div className='month font-semibold'>
                {month}
            </div>
            <div className='year'>
                {year}
            </div>
            <div className='day font-bold text-2xl'>
                {day}
            </div>
        </div>
    )
}

export default ExpenseDate