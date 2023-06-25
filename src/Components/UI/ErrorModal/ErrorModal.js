import classnames from "classnames";
import classes from "./ErrorModal.module.css";
import Modal from "../Modal/Modal";

const ErrorModal = (props) => {
  return (
    <Modal additionalModalClasses={classnames(classes.modal)}>
      <div>
        <h3>An Error Occurred!</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <button> okay </button>
      </div>
    </Modal>
  );
};
export default ErrorModal;
