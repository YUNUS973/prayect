import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
    setShowAddTask(false);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Task Manager</h1>
        <button onClick={() => setShowAddTask(true)}>Add Task</button>
      </header>
      {showAddTask && <AddTask addTask={addTask} />}
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;