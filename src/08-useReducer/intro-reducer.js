const initialState = [
  {
    id: 1,
    todo: "Comprar pan",
    done: false,
  },
];

// este es el reducer una simple funcion que recibe 2 argumentos
const todoReducer = (state = initialState, action= {}) => {

  if (action.type === "[TODO] add todo") {
    return [...state, action.payload];
  }

  return state;
};


//usemos el todoReducer, sin pasarle ningun argumento, me devolvera el estado
let todos = todoReducer();
// console.log(todos);

const newTodo = {
  id: 2,
  todo: "Subir a Gold",
  done: true,
};

// las acciones lucen de la siguiente manera, podemos hacerla como querramos pero hay un estandar
const addTodoAction = {
  type: "[TODO] add todo", //titulo de la accion para identificarla en las reduxDevTools
  payload: newTodo, //info que va dentro de la accion, no todas las acciones llevan un payload, si tenemos una accion de borrar todos por ejemplo, no necesito informacion aqui
};

// usemos el reducer de nuevo pero le pasamos un estado y una accion
todos = todoReducer(todos, addTodoAction);

// console.log({ state: todos });
