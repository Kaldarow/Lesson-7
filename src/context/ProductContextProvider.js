import React, { createContext, useEffect, useState } from "react";
import { API } from "../helper/const";
import axios from "axios";
export const productContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  //! create
  const addTodo = async (todo) => {
    await axios.post(API, todo);
  };
  // ! read
  const getTodos = async () => {
    try {
      const { data } = await axios(API);
      setTodos(data)
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
//   useEffect(() => {
//     if(!todos) {
//         setTodos(getTodos())
//     }
//   }, [todos]);


  const values = {
    addTodo,
    getTodos,
    todos,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
