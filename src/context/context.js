import { createContext, useReducer, useMemo } from "react";

const AuthContext = createContext();

const authReducer = (state, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: {
      access_token: localStorage.getItem("access_token"),
    },
  });

  const value = useMemo(() => ({ ...state, dispatch }), [state]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
