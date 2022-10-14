import { ExpenseContainer } from "./components/js/ExpenseContainer";
import { AddExpense } from "./components/js/AddExpense";

function App() {

  const expenses = [
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

  return (
    <div className="app">
      <AddExpense />
      <ExpenseContainer expenses={expenses} />
    </div>
  );
}

export default App;
