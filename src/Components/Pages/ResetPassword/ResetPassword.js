import styles from "./ResetPassword.module.css";
import classNames from "classnames";
import {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

const ResetPassword = () => {
    const [passEntered, setPassEntered] = useState("");
    const [confirmPassEntered, setConfirmPassEntered] = useState("");
    const [validatePass, setValidatePass] = useState(true);
    const [validateConfirmPass, setValidateConfirmPass] = useState(true);
    let {userId } = useParams();

    let navigate = useNavigate();
    const regex = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})");

    const validatePassword = (password) => {
        return regex.test(password);
    }

    const passChangeHandler = (event) => {
        setPassEntered(event.target.value)
        if(!validatePassword(passEntered)){
            setValidatePass(false);
            return;
        }
        setValidatePass(true);
    }

    const confirmPassChangeHandler = (event) => {
        setConfirmPassEntered(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        // logic
        navigate('/');
    }

    return (
        <div className={styles.page}>
            <div className={styles.resetPassword}>
                <h1>Reset Password</h1>
                <form onSubmit={handleSubmit}>
                    <input type="password"
                           className={classNames(styles.input, {[styles.invalid]: !validatePass})}
                           onChange={passChangeHandler} placeholder="Mot de passe" required="required"/>
                    {!validatePass && <p className={styles.errorMessage}>Le mot de passe doit comporter au moins une lettre minuscule, une lettre majuscule, un chiffre et un caractère spécial, et doit comporter au moins huit caractères.</p>}
                    <input type="password"
                           className={classNames(styles.input, {[styles.invalid]: !validateConfirmPass})}
                           onChange={confirmPassChangeHandler} placeholder="Confirmer mot de passe" required="required"/>
                    {!validateConfirmPass && <p className={styles.errorMessage}>le mot de passe ne correspond pas à la confirmation du mot de passe</p>}
                    <button type="submit" className={styles.button}>Réinitialiser le mot de passe</button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
