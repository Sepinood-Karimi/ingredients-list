import AuthContext from "./auth-context";
import { useState } from "react";

const AuthProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);

  const login = () => {
    setIsAuth(true);
  };
  const authProviderValue = {
    isAuth,
    login,
  };
  return (
    <AuthContext.Provider value={authProviderValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
