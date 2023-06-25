import classnames from "classnames";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classnames(classes.card, props.additionalClassname)}>
      {props.children}
    </div>
  );
};
export default Card;
