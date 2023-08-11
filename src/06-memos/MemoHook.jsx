import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

// hagamos un proceso pesado
const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Ahi vamos...");
  }

  return `${iterationNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);

  // en este caso al renderizar el componente al apretar el boton +1, se ejecutara 4001, despues 40002, pero al apretar el boton show no se ejecuta ya que la dependencia que le pase al useMemo es counter, memorizando tareas pesadas optimizamos nuestro programa
  const messageMemorize = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>

      <h4>{messageMemorize}</h4>

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
