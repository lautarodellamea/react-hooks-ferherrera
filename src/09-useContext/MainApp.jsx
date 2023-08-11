// npm install react-router-dom@6
// https://reactrouter.com/en/main
// https://www.freecodecamp.org/espanol/news/tutorial-de-react-router-version-6-como-navegar-a-otros-componentes-y-configurar-un-enrutador/

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { AboutPage } from "./AboutPage";
import { Navbar } from "./Navbar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    // colocamos el UserProvider, cualquier cosa dentro de este podra usar sus variables
    <UserProvider>
      <h1>MainApp</h1>
      <Navbar />
      
      <hr />

      <Routes>
        {/* defino las rutas */}
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />

        {/* ruta con un path conocido como wildcard (comodin), es para redireccionar cuando no exista una ruta*/}
        {/* esta es una tecnica */}
        {/* <Route path="/*" element={<HomePage />} /> */}

        {/* otra forma */}
        {/* de esta forma me actualiza la url tbn */}
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </UserProvider>
  );
};
