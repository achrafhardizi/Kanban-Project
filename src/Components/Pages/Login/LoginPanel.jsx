import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import styles from "./Loginpanel.module.css"
import classNames from "classnames";


const LoginPanel = () => {

    const [emailEntered, setEmailEntered] = useState("");
    const [passEntered, setPassEntered] = useState("");
    const [validate, setValidate] = useState(true);
    let navigate = useNavigate();

    const emailChangeHandler = (event) => {
        setEmailEntered(event.target.value)
    }

    const passChangeHandler = (event) => {
        setPassEntered(event.target.value)
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (validateEmail(emailEntered) === null || passEntered.trim().length === 0) {
            setValidate(false);
            return;
        }
        setValidate(true)
        navigate('/home')
    }

    return (
        <div className={styles.page}>
            <div className={styles.login}>
                <h1>Login</h1>
                <form method="post" onSubmit={handleSubmit}>
                    <input type="text" value={emailEntered}
                           className={classNames(styles.input, {[styles.invalid]: !validate})}
                           onChange={emailChangeHandler} placeholder="email@gmail.com" required="required"/>
                    {!validate && <p className={styles.errorMessage}>e-mail non valide</p>}
                    <input type="password" value={passEntered}
                           className={classNames(styles.input, {[styles.invalid]: !validate})}
                           onChange={passChangeHandler} placeholder="Mot de passe" required="required"/>
                    {/*{!validate && <p className={styles.errorMessage}>Entrer le mot de passe</p>}*/}
                    <button type="submit" className={styles.button}>Se Connecter</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPanel;
