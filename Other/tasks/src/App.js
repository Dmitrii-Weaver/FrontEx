import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Task Manager</h2>
      <div className="flex gap-2 mb-4">
        <input
          className="border p-3 flex-1 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg shadow-md transition"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {tasks.map((t, index) => (
          <li key={index} className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow">
            <span className="text-gray-800">{t}</span>
            <button
              className="text-red-500 hover:text-red-700 transition"
              onClick={() => deleteTask(index)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
