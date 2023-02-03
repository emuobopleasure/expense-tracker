import React from 'react'

const Modal = () => {
    return (
        <div>
            <div>

                {/* Main modal */}
                <div id="authentication-modal" tabIndex={-1} aria-hidden="true" className="fixed hidden top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                    <div className="relative w-full h-full max-w-md md:h-auto mx-auto my-20">
                        {/* Modal content */}
                        <div className="relative bg-[#250e2a] rounded-lg shadow">
                            <button type="button" className="absolute top-3 right-2.5 text-gray-800 bg-transparent bg-gray-300 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-hide="authentication-modal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="px-6 py-6 lg:px-8">
                                <h3 className="mb-4 text-xl font-medium text-white">Expense Details</h3>
                                <form className="space-y-6">
                                    <div>
                                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-white">Title</label>
                                        <input type="text" name="title" className="bg-[#684e6e] border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="e.g Xbox One Console" required />
                                    </div>
                                    <div>
                                        <label htmlFor="amount" className="block mb-2 text-sm font-medium text-white">Amount</label>
                                        <input type="number" name="amount" placeholder="$899" min='0.01' step='0.01' className="bg-[#684e6e] border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                                    </div>
                                    <div>
                                        <label htmlFor="date" className="block mb-2 text-sm font-medium text-white">Date</label>
                                        <input type="date" name="date" placeholder="2022, 04, 28" min='2021-01-01' className="bg-[#684e6e] border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                                    </div>
                                    <button type="submit" className="w-full text-white bg-[#ef8767] hover:bg-[#ec6c44] focus:outline-none focus:scale-105 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                        Add Expense
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal