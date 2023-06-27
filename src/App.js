import Ingredients from "./Components/Ingredients/Ingredients/Ingredients";
import "./App.css";
import Auth from "./Components/Auth/Auth";
import { useContext } from "react";
import authContext from "./context/auth-context";

function App() {
  const authCtx = useContext(authContext);

  return authCtx.isAuth ? <Ingredients /> : <Auth />;
}

export default App;
