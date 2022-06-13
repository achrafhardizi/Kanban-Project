import {useState} from 'react';
import styles from "./ForgotPass.module.css";
import classNames from "classnames";
import {useNavigate} from "react-router-dom";

const ForgotPass = () => {

    const [emailEntered, setEmailEntered] = useState("");
    const [validEmail, setValidEmail] = useState(true);
    let navigate = useNavigate()

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const emailChangeHandler = (event) => {
        setEmailEntered(event.target.value)
        if(validateEmail(emailEntered) == null){
            setValidEmail(false);
            return;
        }
        setValidEmail(true);
    }



    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

    }

    return (
        <div className={styles.page}>
            <div className={styles.forgotPass}>
                <h1>Forgot Password</h1>
                <form onSubmit={handleSubmit}>
                    <p>
                        Mot de passe perdu? veuillez entrer votre adresse e-mail. Vous recevrez un lien pour créer un nouveau mot de passe par e-mail
                    </p>
                    <input type="text" value={emailEntered}
                           className={classNames(styles.input, {[styles.invalid]: !validEmail})}
                           onChange={emailChangeHandler} placeholder="e.g. email@gmail.com" required="required"/>
                    {!validEmail && <p className={styles.errorMessage}>email non valide</p>}
                    <button type="submit" className={styles.button}>Mot de passe oublié</button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPass;
