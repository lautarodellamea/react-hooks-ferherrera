// se suele hacer en archivos separados el Context y el Provider

import { useState } from "react";
import { UserContext } from "./UserContext";

// const user = {
//   id: 123,
//   name: "Fer",
//   email: "fer@gmail.com",
// };


// en las properties tambien recibe el hijo (es opcional)
export const UserProvider = ({ children }) => {


  const [user, setUser] = useState()


  return (
    // <UserContext.Provider value={{ user: user }}>
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// lo que tengo en el value sera la info que caulquier hijo pueda obtener de este usercontext
