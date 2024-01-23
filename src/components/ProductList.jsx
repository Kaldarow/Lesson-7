import React, { useContext, useEffect } from "react";
import { productContext } from "../context/ProductContextProvider";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { getTodos, todos } = useContext(productContext);

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      {todos.map((elem) => (
        <ProductCard {...elem} key={elem.id} />
      ))}
    </div>
  );
};

export default ProductList;
