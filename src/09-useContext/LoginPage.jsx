import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  // usemos informacion del context
  // si tuvieramos otro UserContext, toma el mas cercano, para arriba
  const { user, setUser } = useContext(UserContext); //es lo que esta en el value

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      {/* el null es para ver el objeto abierto y el 3 es la identacion */}
      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({ id: 123, name: "Juan", email: "juan@gmail.com" })
        }
      >
        Establecer usuario
      </button>
    </>
  );
};
