import React, { useState } from 'react';

const TaskPage = () => {
  const [tasks, setTasks] = useState([
    { id: 1, taskName: "Follow up with potential client", completed: false },
    { id: 2, taskName: "Schedule meeting with current client", completed: false },
    { id: 3, taskName: "Send invoice to past client", completed: false }
  ]);

  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Tasks</h1>
      {tasks.map((task) => (
        <div key={task.id}>
          <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)} />
          <span>{task.taskName}</span>
        </div>
      ))}
    </div>
  );
};

export default TaskPage;
