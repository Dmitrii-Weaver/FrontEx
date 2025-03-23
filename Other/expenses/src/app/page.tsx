"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

export default function Home()  {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  
  const categories = ["Food", "Transport", "Bills", "Entertainment", "Other"];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28CFE"];

  const addExpense = () => {
    if (!amount) return;
    setExpenses([...expenses, { id: Date.now(), amount: parseFloat(amount), category }]);
    setAmount("");
  };

  const data = categories.map((cat) => ({
    name: cat,
    value: expenses.filter((e) => e.category === cat).reduce((sum, e) => sum + e.amount, 0),
  })).filter(d => d.value > 0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-gray-900">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full bg-white shadow-lg rounded-xl p-6 border border-gray-300"
      >
        <h2 className="text-2xl font-bold text-center mb-4">💰 Expense Tracker</h2>
        <div className="flex gap-2 mb-4">
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-gray-400 rounded-lg text-gray-900"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border border-gray-400 rounded-lg text-gray-900"
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
          {expenses.length > 0 ? (
            expenses.map((expense) => (
              <div key={expense.id} className="mb-2 p-3 bg-gray-200 rounded-lg flex justify-between text-gray-900">
                <span>{expense.category}</span>
                <span className="font-bold">${expense.amount.toFixed(2)}</span>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No expenses added yet.</p>
          )}
        </div>
      </motion.div>
      {expenses.length > 0 && (
        <div className="mt-6 w-full max-w-lg bg-white p-6 shadow-lg rounded-xl border border-gray-300">
          <h3 className="text-xl font-bold text-center mb-4">📊 Expense Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value" label>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
      {expenses.length > 0 && (
        <div className="mt-6 w-full max-w-lg bg-white p-6 shadow-lg rounded-xl border border-gray-300">
          <h3 className="text-xl font-bold text-center mb-4">📊 Expense Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
