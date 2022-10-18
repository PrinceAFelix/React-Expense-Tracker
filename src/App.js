import { ExpenseContainer } from "./components/js/ExpenseContainer";
import { AddExpense } from "./components/js/AddExpense";
import React, { useState } from "react";

const initialExpenses = [
  {
    id: '1',
    name: 'Laptop repair',
    amount: 120.01,
    date: new Date(2021, 8, 21),
  },
  {
    id: '2',
    name: 'Car repair',
    amount: 200.01,
    date: new Date(2022, 1, 27),
  },
  {
    id: '3',
    name: 'Phone repair',
    amount: 420.01,
    date: new Date(2021, 3, 20),
  },
  {
    id: '4',
    name: 'Camera repair',
    amount: 189.01,
    date: new Date(2019, 8, 12),
  }
]

function App() {

  const [expenses, setExpense] = useState(initialExpenses);

  let sortedExpenses = expenses.sort((a, b) => a.date - b.date);

  // let [selectedExp, setSelectedExp] = useState(initialExpenses);

  // const sortByYear = (selectedYear) => {
  //   setSelectedExp([]);
  //   console.log(selectedYear)
  //   expenses.forEach((exp) => {
  //     if (exp.date.getFullYear() == selectedYear) {
  //       setSelectedExp(prevSelectedExp => {
  //         return [exp, ...prevSelectedExp]
  //       })
  //     }
  //   })
  // }

  const addExpenseHandler = (newExpense) => {
    setExpense(prevExpenses => {
      return [newExpense, ...prevExpenses];
    });
  }

  return (
    <div className="app">
      <AddExpense onAddExpense={addExpenseHandler} />
      <ExpenseContainer expenses={sortedExpenses} />
    </div>
  );
}

export default App;
