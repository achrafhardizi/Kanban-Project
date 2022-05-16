import styles from './Modal.module.css';
import classNames from "classnames";

const Modal = (props) => {
    const classes = styles.modal + " " + props.className;


    return (
        <div className={classNames(styles.backdrop,{[styles.show]:props.show})}>
            <div className={classes}>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;
