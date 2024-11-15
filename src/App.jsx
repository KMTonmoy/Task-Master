import React from 'react';
import './App.css'
const App = () => {

  const addTask = () => {

    console.log("New Task Added 😜😜")

  }


  return (
    <div className='container'>
      <div className='todo-app'>
        <h2>My To-Do List</h2>
        <div className="status">
          <p>Total Tasks:0</p>
          <p>
            Completed Tasks: 0
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
      </div>
    </div>
  );
};

export default App;