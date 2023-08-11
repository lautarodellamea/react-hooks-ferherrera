// podemos usar el memo para memorizar un componente, pero react recomienda hacerlo cuando el omponente es muy grande sino no hay necesidad

// import { memo } from "react";

// se suele ver usado asi
import React from "react";

export const Small = React.memo(({ value }) => {
  console.log("Me volvi a dibujar :(");

  return <small>{value}</small>;
});

// ahora al apretar el boton de Show no se vuelve a renderizar