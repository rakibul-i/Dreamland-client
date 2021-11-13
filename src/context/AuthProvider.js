import React, { createContext } from "react";
import useFirebase from "../firebase/useFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const allValues = useFirebase();

  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
