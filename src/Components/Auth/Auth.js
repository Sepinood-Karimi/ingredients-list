import Card from "../UI/Card/Card";
import classes from "./Auth.module.css";
import { useContext } from "react";
import authContext from "../../context/auth-context";

const Auth = () => {
  const authCtx = useContext(authContext);

  const loginHandler = () => {
    authCtx.login();
  };
  return (
    <Card additionalClassname={classes.auth}>
      <h3>You are not authenticated!</h3>
      <p>please login to continue</p>
      <button onClick={loginHandler}>Login</button>
    </Card>
  );
};
export default Auth;
