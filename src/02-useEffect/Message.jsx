import { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      // const coords = { x, y };

      setCoords({ x, y });
    };

    window.addEventListener("mousemove", onMouseMove);

    // aca nos evitamos hacer cambios en el satetd e un componente que no esta montado
    return () => {
      console.log("Message Desmontado");
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
      {JSON.stringify(coords)}
    </>
  );
};
