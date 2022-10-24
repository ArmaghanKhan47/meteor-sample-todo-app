import React, { useState } from 'react';
import { TasksCollection, ITask } from '/imports/api/tasks';

const TaskForm = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!text) return;

    TasksCollection.insert({
      text: text.trim(),
      isChecked: false,
      createdAt: new Date()
    } as ITask);

    setText("");
  };

  return (
    <form className="task-form">
      <input
        type="text"
        placeholder="Type to add new tasks"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit" onClick={handleSubmit}>Add Task</button>
    </form>
  );
};

export default TaskForm;