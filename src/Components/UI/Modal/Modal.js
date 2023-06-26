import { createPortal } from "react-dom";
import classnames from "classnames";
import classes from "./Modal.module.css";

const Modal = (props) => {
  const closeModalHandler = () => {
    props.onClose();
  };
  return createPortal(
    <div className={classnames(classes.overlay)} onClick={closeModalHandler}>
      <div
        className={props.additionalModalClasses}
        onClick={(e) => e.stopPropagation()}
      >
        {props.children}
      </div>
    </div>,
    document.getElementById("overlays")
  );
};
export default Modal;
