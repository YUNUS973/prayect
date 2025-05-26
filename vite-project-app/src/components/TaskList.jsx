import React, { useState } from 'react';
import EditTask from './EditTask';

function TaskList({ tasks, updateTask, deleteTask }) {
  const [editingId, setEditingId] = useState(null);

  return (
    <div className="task-list">
      <h2>My Tasks</h2>
      {tasks.map(task => (
        <div className="task-card" key={task.id}>
          {editingId === task.id ? (
            <EditTask
              task={task}
              updateTask={updateTask}
              setEditingId={setEditingId}
            />
          ) : (
            <>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <button className="edit" onClick={() => setEditingId(task.id)}>Edit</button>
              <button className="delete" onClick={() => deleteTask(task.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default TaskList;