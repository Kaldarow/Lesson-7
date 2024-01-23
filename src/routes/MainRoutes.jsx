import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProduct";
import Details from "../components/Details";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
};

export default MainRoutes;
        