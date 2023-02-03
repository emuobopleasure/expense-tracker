import React from 'react'

const ExpensesFilter = ({filteredYear, filterChangeHandler}) => {

    const dropDownHandler = (e) => {
        filterChangeHandler(e.target.value)
        // console.log(e.target.value)
    }
  return (
    <div>
        <div className='filter-section flex items-center justify-between my-1'>
                <label>
                    <p className='filter-text font-semibold'>Filter by year</p>
                </label>
                <div className='yearly-filter p-2'>
                    <select value={filteredYear} onChange={dropDownHandler} className='dates bg-[#42224a] border-[1px] border-white rounded-2xl p-2'>
                        <option >Year</option>
                        <option value='2023'>2023</option>
                        <option value='2022'>2022</option>
                        <option value='2021'>2021</option>
                        <option value='2020'>2020</option>
                    </select>
                </div>
            </div>
    </div>
  )
}

export default ExpensesFilter