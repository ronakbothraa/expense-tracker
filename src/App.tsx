import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import categories from "./categories";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "something", amount: 100, category: "food" },
    { id: 2, description: "anything", amount: 200, category: "food" },
    { id: 3, description: "nothing", amount: 300, category: "food" },
    { id: 4, description: "whatever", amount: 400, category: "food" },
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          updateData={(e) => {
            // Generate a new unique ID (max existing ID + 1)
            const newId =
              expenses.length > 0
                ? Math.max(...expenses.map((expense) => expense.id)) + 1
                : 1;

            // Add the ID to the expense object before adding to array
            setExpenses([...expenses, { ...e, id: newId }]);
          }}
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter handleSelect={(e) => setSelectedCategory(e)} />
      </div>
      <div className="mb-3">
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) => handleDelete(id)}
        />
      </div>
    </div>
  );
};

export default App;
