import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import styles from "./Loginpanel.module.css"
import classNames from "classnames";
import axios from "axios"


const LoginPanel = () => {

    const url = "http://localhost:5000/"
    const user = {
        username: 'Youneesz',
        password: 'aaaaaa'
    }


    const getUser = () => {
        axios.post(`${url}login/`, {user})
            .then(function (response) {
                console.log(JSON.parse(response));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

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
        if ((usernameEntered.trim().length === 0)
            || passEntered.trim().length === 0) {
            setValidate(false);
            return;
        }
        setValidate(true)
        getUser();
        // navigate('/sessions')
    }

    return (
        <div className={styles.page}>
            <div className={styles.login}>
                <h1>SignIn</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={usernameEntered}
                           className={classNames(styles.input, {[styles.invalid]: !validate})}
                           onChange={usernameChangeHandler} placeholder="Nom d'utilisateur" required="required"/>
                    {!validate && <p className={styles.errorMessage}>username non valide au moins 5 caractères!</p>}
                    <input type="password" value={passEntered}
                           className={classNames(styles.input, {[styles.invalid]: !validate})}
                           onChange={passChangeHandler} placeholder="Mot de passe" required="required"/>
                    <button type="submit" className={styles.button}>Se Connecter</button>
                    <Link to="signUp">Creer un Compte</Link>
                    <Link to="forgotPassword">mot de passe oublié?</Link>
                </form>
            </div>
        </div>
    );
};

export default LoginPanel;
