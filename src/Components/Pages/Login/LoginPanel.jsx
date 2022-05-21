import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import styles from "./Loginpanel.module.css"
import classNames from "classnames";


const LoginPanel = () => {

    const [usernameEntered, setUsernameEntered] = useState("");
    const [passEntered, setPassEntered] = useState("");
    const [validate, setValidate] = useState(true);
    let navigate = useNavigate();

    const usernameChangeHandler = (event) => {
        setUsernameEntered(event.target.value)
    }

    const passChangeHandler = (event) => {
        setPassEntered(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if ( (usernameEntered.trim().length === 0 || usernameEntered.trim().length < 5)
            || passEntered.trim().length === 0) {
            setValidate(false);
            return;
        }
        setValidate(true)
        navigate('/sessions')
    }

    return (
        <div className={styles.page}>
            <div className={styles.login}>
                <h1>Login</h1>
                <form method="post" onSubmit={handleSubmit}>
                    <input type="text" value={usernameEntered}
                           className={classNames(styles.input, {[styles.invalid]: !validate})}
                           onChange={usernameChangeHandler} placeholder="username" required="required"/>
                    {!validate && <p className={styles.errorMessage}>username non valide au moins 5 caractères!</p>}
                    <input type="password" value={passEntered}
                           className={classNames(styles.input, {[styles.invalid]: !validate})}
                           onChange={passChangeHandler} placeholder="Mot de passe" required="required"/>
                    {/*{!validate && <p className={styles.errorMessage}>Entrer le mot de passe</p>}*/}
                    <button type="submit" className={styles.button}>Se Connecter</button>
                    <Link to="signUp">Creer un Compte</Link>
                    <Link to="forgotPassword">mot de passe oublié?</Link>
                </form>
            </div>
        </div>
    );
};

export default LoginPanel;
