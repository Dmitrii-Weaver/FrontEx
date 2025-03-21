"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  
  const categories = ["Food", "Transport", "Bills", "Entertainment", "Other"];

  const addExpense = () => {
    if (!amount) return;
    setExpenses([...expenses, { id: Date.now(), amount: parseFloat(amount), category }]);
    setAmount("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full bg-white shadow-lg rounded-xl p-6 border border-gray-300"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-black">💰 Expense Tracker</h2>
        <div className="flex gap-2 mb-4">
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-gray-400 rounded-lg text-black"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border border-gray-400 rounded-lg text-black"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <button 
            onClick={addExpense} 
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add
          </button>
        </div>
        <div>
          {expenses.map((expense) => (
            <div key={expense.id} className="mb-2 p-3 bg-gray-200 rounded-lg flex justify-between text-black">
              <span>{expense.category}</span>
              <span className="font-bold">{expense.amount.toFixed(2)} €</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
