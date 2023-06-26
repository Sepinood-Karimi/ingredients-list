import classnames from "classnames";
import classes from "./ErrorModal.module.css";
import Modal from "../Modal/Modal";

const ErrorModal = (props) => {
  const closeModalHandler = () => {
    props.onCloseErrorModal();
  };
  return (
    <Modal
      additionalModalClasses={classnames(classes.modal)}
      onClose={closeModalHandler}
    >
      <div>
        <h3>An Error Occurred!</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <button onClick={closeModalHandler}> okay </button>
      </div>
    </Modal>
  );
};
export default ErrorModal;
