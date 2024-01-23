import React, { useContext, useState } from "react";
import { productContext } from "../context/ProductContextProvider";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const { addTodo } = useContext(productContext);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [img, setImg] = useState("");

  const handleClick = () => {
    if (!name && !phone && !img) {
      return;
    }
    let newObj = {
      name: name,
      surname: surname,
      phone: phone,
      img: img,
    };
    addTodo(newObj);
    setName("");
    setSurname("");
    setPhone("");
    setImg("");
    navigate("/");
  };
  return (
    <div>
      <TextField
        onChange={(e) => setName(e.target.value)}
        id="outlined-basic"
        label="Name"
        variant="outlined"
      />
      <TextField
        onChange={(e) => setSurname(e.target.value)}
        id="outlined-basic"
        label="Name"
        variant="outlined"
      />
      <TextField
        onChange={(e) => setPhone(e.target.value)}
        id="outlined-basic"
        label="phone"
        variant="outlined"
      />
      <TextField
        onChange={(e) => setImg(e.target.value)}
        id="outlined-basic"
        label="img"
        variant="outlined"
      />
      <Button onClick={handleClick} variant="contained">
        Add Card
      </Button>
    </div>
  );
};

export default AddProduct;
