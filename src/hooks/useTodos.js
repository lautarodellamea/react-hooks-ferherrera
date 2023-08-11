import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

// la funcion init es la que inicializa el estado
const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    // aca defino que quiero cuardar en el localStorage dandole un nombre a la variable, y lo que quiero guardar, pero solo recibe string por eso debo transformarlo
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    // definimos la accion
    const action = {
      // le damos un nombre a la accion
      type: "[TODO] Add Todo",
      payload: todo,
    };

    // el dispatch es la funcion que uso para mandar esta accion
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    // console.log({id})

    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    console.log({ id });

    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };


  return {
    todos,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
    todosCount : todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length,
  };
};
