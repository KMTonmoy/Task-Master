import React, { useState, useEffect } from "react";
import './App.css';
import img1 from './assets/checked.png';
import img2 from './assets/unchecked.png';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");
  const [priority, setPriority] = useState("low");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = () => {
    if (inputValue.trim()) {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        priority: priority,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInputValue("");
      toast.success("Task added!");
    }
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    const task = updatedTasks.find((task) => task.id === id);
    toast.info(task.completed ? "Task completed!" : "Task marked as incomplete!");
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    toast.error("Task deleted!");
  };

  const sortTasks = (tasks, sortBy) => {
    if (sortBy === "completed") {
      return tasks.filter((task) => task.completed === true);
    }
    if (sortBy === "active") {
      return tasks.filter((task) => task.completed === false);
    }
    if (sortBy === "low" || sortBy === "medium" || sortBy === "high") {
      return [...tasks].filter((task) => task.priority === sortBy);
    }
    return tasks;
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "completed" ? task.completed : !task.completed);
    const matchesSearch = task.text.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const sortedTasks = sortTasks(filteredTasks, sortBy);

  return (
    <div className="container">
      <ToastContainer />
      <div className="todo-app">
        <h2>My To-Do List</h2>
        <div className="status">
          <p>Total Tasks: {tasks.length}</p>
          <p>Completed Tasks: {tasks.filter((task) => task.completed).length}</p>
        </div>

        <div className="row">
          <input
            type="text"
            placeholder="Add a new task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <select
            className="priority-filter-dropdown"
            onChange={(e) => setPriority(e.target.value)}
            value={priority}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button className="add-task-button" onClick={addTask}>
            Add
          </button>
        </div>

        <div className="filters">
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
          />

          <select
            className="sort-dropdown"
            onChange={(e) => setSortBy(e.target.value)}
            value={sortBy}
          >
            <option value="">All Tasks</option>
            <option value="completed">Completed</option>
            <option value="active">Incompleted</option>
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
        </div>

        <ul id="list-container">
          <AnimatePresence>
            {sortedTasks.length > 0 ? (
              sortedTasks.map((task) => (
                <motion.li
                  key={task.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className={task.completed ? "checked" : ""}
                  onClick={() => toggleTaskCompletion(task.id)}
                >
                  <img
                    src={task.completed ? img1 : img2}
                    className="check-icon"
                    alt="check-icon"
                  />
                  <div className={`priority-label priority-${task.priority}`}>
                    {task.priority.toUpperCase()}
                  </div>
                  {task.text}
                  <span
                    className="delete-icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteTask(task.id);
                    }}
                  >
                    &times;
                  </span>
                </motion.li>
              ))
            ) : (
              <motion.li
                key="no-matches"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="no-matches"
              >
                No matching tasks found
              </motion.li>
            )}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
};

export default App;
