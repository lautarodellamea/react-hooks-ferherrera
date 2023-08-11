import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ author, quote }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  // el useLayoutEffect se dispara de manera asincrona cuando todas las mutaciones en el DOM se hayan disparado
  // funciona igual que el useEffect
  // en este caso obtendremos el tamaño de un contenedor
  // ver documentacion, no me quedo tan claro
  useLayoutEffect(() => {
    const {height, width} = pRef.current.getBoundingClientRect();

    setBoxSize({height, width});
  }, [quote]); // aca es indistinto poner el quote porque se vuelve a crear el componente

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p ref={pRef} className="mb-1">
          {quote}
        </p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
