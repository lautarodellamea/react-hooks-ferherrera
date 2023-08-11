import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "lautaro",
    email: "lautaro@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    // console.log(e.target.name) // asi vemos que elemento esta cambiando

    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // react recomienda crear efectos especificos por cada o efecto secundario que querramos llamar y no un solo useEffect muy grande
  useEffect(() => {
    // console.log("useEffect se llamo!");
  }, []);

  useEffect(() => {
    // console.log("formSatet cambio!");
  }, [formState]);

  useEffect(() => {
    // console.log("email cambio!");
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>

      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="ejemplo@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === "lautaro" && <Message />}
    </>
  );
};
