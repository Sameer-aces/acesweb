import React, { createContext, useState } from "react";
export const GlobalContext = createContext({});
export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
  });
  const [email, setEmail] = useState();
  return (
    <GlobalContext.Provider
      value={{
        email,
        setEmail,
        user,
        setUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
