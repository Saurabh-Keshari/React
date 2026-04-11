import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import "./Todo.css";

export default function Todo() {
  let [todos, setTodos] = useState([
    { task: "sample task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let updateTodoValue = (event) => {
    if (event.target.value != "") setNewTodo(event.target.value);
  };

  let addNewTask = () => {
    if (newTodo != "") {
      setTodos((prevTodos) => {
        return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
      });

      setNewTodo("");
    }
  };

  let deleteTask = (id) => {
    setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo.id != id));
  };

  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => {
        if (prevTodo.id == id) {
          return {
            ...prevTodo,
            isDone: true,
          };
        } else {
          return prevTodo;
        }
      }),
    );
  };

  let markAllAsDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => {
        return {
          ...prevTodo,
          isDone: true,
        };
      }),
    );
  };

  return (
    <div className="container">
      <h2>Focus on Today</h2>
      <div className="search-box" id="searchBox">
        <input
          type="text"
          id="search-input"
          placeholder="Add your task"
          value={newTodo}
          onChange={updateTodoValue}
        />
        <br />
        <button className="search-btn" id="toggleBtn" onClick={addNewTask}>
          Add New Task
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={todo.isDone ? { textDecorationLine: "line-through" } : {}}
            >
              {todo.task}
            </span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTask(todo.id)}>Delete</button>
            <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <button onClick={markAllAsDone}>Mark All As Done</button>
    </div>
  );
}
