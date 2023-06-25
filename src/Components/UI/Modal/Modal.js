import { createPortal } from "react-dom";
import classnames from "classnames";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return createPortal(
    <div className={classnames(classes.overlay)}>
      <div className={props.additionalModalClasses}>{props.children}</div>
    </div>,
    document.getElementById("overlays")
  );
};
export default Modal;
