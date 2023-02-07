import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

function App() {

  const initial_expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2021, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2023, 1, 12),
    },
  ]

  const [expenses, setExpenses] = useState(initial_expenses)
  // console.log(expenses)

  const addExpenseHandler = (expense) => {
    // console.log('in app.js')
    // console.log(expense)
    setExpenses((prevExpense) => {
      return ([expense, ...expenses])
    })
  }

  return (
    <div className="Expense-App bg-white w-[100vw] h-[100vh] md:bg-[#250e2a] pt-[2rem] md:text-white">      
      
      <NewExpense
        addExpenseHandler={addExpenseHandler} 
      />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
