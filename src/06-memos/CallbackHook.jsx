import { useCallback, useEffect, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  // muy parecido al useMemo pero memoriza funciones
  // de esta forma le decimos a react que la funcion no esta cambiando y la mantiene en el mismo espacio en memoria
  // no hace falta usar el useCallback y useMemo, solo si vemos que tenemos funciones muy grandes y notamos depreciaciones en el codigo, como para optimizarlo
  const incrementFather = useCallback((value) => {
    setCounter((c) => c + value); // podemos mandar un callback a las funciones que hacen distpach de los cambios de estado
  }, []);

  // otro caso de uso, esto no nos crea un bucle infinito ya que usamos el useCallback anteriormente
  // estoe s si quisieramos hacer algo cuando la funcion cambie
  // useEffect(() => {
  //   incrementFather();
  // }, [incrementFather]);

  // cada vez que se redibuja este componente, esta funcion apunta a una posision diferente en memoria y por eso al presionar el bototn se vuelve a generar el componente ShowIncrement, ya que el objeto (funcion) siempre es diferente y no lo puede memorizar
  // const incrementFather = () => {
  //   setCounter(counter + 1);
  // };

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <ShowIncrement increment={incrementFather} />
    </>
  );
};
