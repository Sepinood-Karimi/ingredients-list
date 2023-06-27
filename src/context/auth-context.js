import { createContext } from "react";

const defaultAuthContext = {
  isAuth: false,
  login: () => {},
};
const AuthContext = createContext(defaultAuthContext);

export default AuthContext;
