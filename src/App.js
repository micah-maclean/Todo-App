import React, { useState } from "react";
import { nanoid } from "nanoid";
import Todo from "./components/Todo.js"
import Form from "./components/Form.js";
import FilterButton from "./components/FilterButton.js";

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};


function App(props) {
  
  
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All');
  const FILTER_NAMES = Object.keys(FILTER_MAP);

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
    // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  const taskList = tasks.filter(FILTER_MAP[filter]).map(task => (
    <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    )
  );
  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  
  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const status = filter === 'Completed' ? 'completed' : filter === 'Active' ? 'active' : '';
  const headingText = `${taskList.length} ${tasksNoun} ${status}`;

  return (
    <div className="todo-app">
      <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading">
       {headingText}
      </h2>
      <ul role="list" className="todo-list">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
