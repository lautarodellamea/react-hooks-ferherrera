import React, { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, username, email, password, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });


  // en este hook vimos la forma de evitar esta linea si quisieramos
  // const { username, email, password } = formState;

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

      <form action="">
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
        <input
          type="password"
          className="form-control mt-2"
          placeholder="Contraseña"
          name="password"
          value={password}
          onChange={onInputChange}
        />
        <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>
      </form>
    </>
  );
};
