import Card from "../UI/Card/Card";
import classes from "./Auth.module.css";

const Auth = () => {
  return (
    <Card additionalClassname={classes.auth}>
      <h3>You are not authenticated!</h3>
      <p>please login to continue</p>
      <button>Login</button>
    </Card>
  );
};
export default Auth;
