// el useRef sirve para modificar un valor sin lanzar renderizaciones
// es como un useState que no dispara una renderizacion de nuevo

import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    // console.log(inputRef);

    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>

      <input
        ref={inputRef}
        className="form-control"
        type="text"
        placeholder="Ingrese su nombre"
      />
      <input
        className="form-control"
        type="text"
        placeholder="Ingrese su nombre"
      />
      <input
        className="form-control"
        type="text"
        placeholder="Ingrese su nombre"
      />

      <button onClick={onClick} className="btn btn-primary mt-2">
        Set Focus
      </button>
    </>
  );
};
