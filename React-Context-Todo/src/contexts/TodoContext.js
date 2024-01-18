import React from "react";
import { useContext } from "react";
import { createContext } from "react";

export const TodoConText = createContext( {
  todos: [ {
    id: 1,
    todo: "Todo Message",
    completed: false
  } ],
  addTodo: ( todo ) => { },
  updateTodo: ( id, todo ) => { },
  deleteTodo: ( id ) => { },
  toggleTodo: ( id, state ) => { }

} );

export const useTodo = () =>
{
  return (
    useContext( TodoConText )
  );
};

export const TodoConTextProvider = TodoConText.Provider;