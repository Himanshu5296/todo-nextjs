import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // Function to add a new todo item
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  // Function to toggle the completion status of a todo
  const toggleTodo = (index) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a completed todo
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-md mx-auto my-8">
      <Input
        placeholder="Enter a new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button onClick={addTodo} className="mt-2">
        Add Todo
      </Button>

      <ul className="mt-4">
        {todos.map((todo, index) => (
          <li key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`todoCheck-${index}`}
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
            />
            <label
              htmlFor={`todoCheck-${index}`}
              className={`ml-2 flex-1 ${todo.completed ? "line-through" : ""}`}
            >
              {todo.text}
            </label>
            {todo.completed && (
              <Button
                onClick={() => deleteTodo(index)}
                className="ml-2"
                variant="destructive"
              >
                Delete
              </Button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
