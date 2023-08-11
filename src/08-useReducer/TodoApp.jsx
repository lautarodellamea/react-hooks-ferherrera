import React from "react";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks";

export const TodoApp = () => {
  // hacemos un customHook para no tener tanta logica aca
  const { todos,todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } =
    useTodos();

  return (
    <div className="container">
      <h1>
        TodoApp: {todosCount}, <small>pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-md-7 col-12">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>

        <div className="col-md-5 col-12">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={(todo) => handleNewTodo(todo)} />
        </div>
      </div>
    </div>
  );
};
