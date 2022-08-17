import React, { Children, useContext } from "react";

const todoContext = React.createContext();

// consumer
export function useTodo() {
  return useContext(todoContext);
}

// provider

export function TodoProvider({ chindren }) {
  const value = {};
  return <todoContext.Provider value={value}>{Children}</todoContext.Provider>;
}
