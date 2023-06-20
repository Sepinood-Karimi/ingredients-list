import classnames from "classnames";
import classes from "./Card.module.css";

const Card = (props) => {
  return <div className={classnames(classes.card)}>{props.children}</div>;
};
export default Card;
