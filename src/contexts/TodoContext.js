import React, { useReducer, useContext } from "react";
import reducer, { initialState } from "../reducers/todos-reducer";

const TodoContext = React.createContext(null);

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const context = {
    state,
    dispatch
  }
  return <TodoContext.Provider value={context}>
    { children }
  </TodoContext.Provider>
}

export const useTodo = () => {
  const context = useContext(TodoContext);
  return context;
};
