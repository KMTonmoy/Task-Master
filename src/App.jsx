import React from 'react';
import './App.css'

const App = () => {

  const addTask = () => {
    console.log('Hello World Form The Add Button 🫡')
  };

  const toggleTaskCompletion = (id) => {
    console.log('Hello World Form Toggle Task Compleated Button Button 🫡')

  };

  const deleteTask = (id) => {
    console.log('Hello World Form Toggle Task Deleted Button Button 🫡')

  };


  return (
    <div className="container">
      <div className="todo-app">
        <h2>My To-Do List</h2>
        <div className="status">
          <p>Total Tasks:  </p>
          <p>
            Completed Tasks:
          </p>
        </div>

        <div className="row">
          <input
            type="text"
            placeholder="Add a new task"

          />
          <button className="add-task-button" onClick={addTask}>
            Add Task
          </button>
        </div>

        <div className="filters">
          <select
            className="sort-dropdown"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="active">Active</option>
          </select>

          <select
            className="priority-filter-dropdown"
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
        </div>

        <ul id="list-container">

          <li
            className={"Checked" ? "checked" : ""}
            onClick={() => toggleTaskCompletion('task Haha')}
          >
            <div className={`priority-label priority `}>
              H
            </div>
            JavaScript
            <span
              className="delete-icon"
              onClick={(e) => {
                e.stopPropagation();
                deleteTask('Task Delete');
              }}
            >
              &times;
            </span>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default App;
