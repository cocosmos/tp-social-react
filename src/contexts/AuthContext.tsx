import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import AuthReducer from "./AuthReducer";

interface ContextType {
  dispatch: React.Dispatch<{ type: any; payload: any }>;
}

const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("user") || "{}"),
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContext = createContext<ContextType | any>(INITIAL_STATE);

export const AuthContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, []);

  const value = {
    alert,
    currentUser: state.currentUser,
    dispatch,
  };

  return <AuthContext.Provider {...{ value }}>{children}</AuthContext.Provider>;
};
