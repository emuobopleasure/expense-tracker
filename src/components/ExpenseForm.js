import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';

const ExpenseForm = ({ saveExpenseHandler }) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [showBtn, setShowBtn] = useState(true)

    const titleChangeHandler = (e) => {
        // console.log(e.target.value)
        setEnteredTitle(e.target.value)
        // console.log(enteredTitle)
    }

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value)
        // console.log(enteredAmount)
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value)

    }

    const submitHandler = (e) => {
        e.preventDefault()

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        // console.log(expenseData)
        saveExpenseHandler(expenseData)
        setEnteredAmount('')
        setEnteredTitle('')
        setEnteredDate('')
        setShowModal((prevState) => !prevState)
        setShowBtn((prevState) => !prevState)
    }

    const modalToggle = () => {
        setShowModal((prevState) => !prevState)
        setShowBtn((prevState) => !prevState)
    }

    return (
        <div>
            {showBtn &&
            <div className='flex justify-end mr-[6vw] md:mr-[7vw] lg:mr-[20vw]'>
                <button onClick={modalToggle} className="w-fit text-white bg-[#ef8767] hover:bg-[#ec6c44] focus:outline-none focus:scale-105 font-medium rounded-[0.9rem] text-sm px-5 py-2.5 text-center shadow-2xl md:shadow-current md:shadow flex gap-1 items-center">
                    <AiOutlinePlus size='1.5rem' className='plus-icon'/> <span className='hidden md:flex'>Add Expense</span>
                </button>
            </div>
            }
            {showModal &&
                /* Main modal */
                <div id="authentication-modal" tabIndex={-1} aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                    <div className="relative w-full h-full max-w-md md:h-auto mx-auto my-20">
                        {/* Modal content */}
                        <div className="relative bg-[#250e2a] rounded-[2rem] border-gray-300 border-[1px] shadow">
                            <button type="button" onClick={modalToggle} className="absolute top-3 right-2.5 text-gray-800 bg-transparent bg-gray-300 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-hide="authentication-modal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="px-6 py-6 lg:px-8">
                                <h3 className="mb-4 text-xl font-medium text-white">Expense Details</h3>
                                {/* expense form */}
                                <form onSubmit={submitHandler} className="space-y-6">
                                    <div>
                                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-white">Title</label>
                                        <input type="text" value={enteredTitle} onChange={titleChangeHandler} name="title" className="bg-[#684e6e] border border-gray-300 text-white text-sm rounded-[0.9rem] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="e.g Xbox One Console" required />
                                    </div>
                                    <div>
                                        <label htmlFor="amount" className="block mb-2 text-sm font-medium text-white">Amount</label>
                                        <input type="number" value={enteredAmount} onChange={amountChangeHandler} name="amount" placeholder="$899" min='0.01' step='0.01' className="bg-[#684e6e] border border-gray-300 text-white text-sm rounded-[0.9rem] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                                    </div>
                                    <div>
                                        <label htmlFor="date" className="block mb-2 text-sm font-medium text-white">Date</label>
                                        <input type="date" value={enteredDate} onChange={dateChangeHandler} name="date" placeholder="2022, 04, 28" min='2021-01-01' className="bg-[#684e6e] border border-gray-300 text-white text-sm rounded-[0.9rem] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                                    </div>
                                    <button type="submit" className="w-full text-white bg-[#ef8767] hover:bg-[#ec6c44] focus:outline-none focus:scale-105 font-medium rounded-[0.9rem] text-sm px-5 py-2.5 text-center">
                                        Add Expense
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default ExpenseForm