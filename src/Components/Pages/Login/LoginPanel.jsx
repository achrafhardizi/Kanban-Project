import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import styles from "./Loginpanel.module.css"
import classNames from "classnames";
import axios from "axios"


const LoginPanel = (props) => {

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const getUser = () => {

        axios.post(`http://localhost:5000/login/`, user)
            .then(function (response) {
                console.log("user", response.data)
                localStorage.setItem("id", JSON.stringify(response.data.idUser));
            })
            .catch(function (error) {
                localStorage.clear()
            });
    }
    const [validate, setValidate] = useState(true);
    let navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if ((user.username.trim().length === 0)
            || user.password.trim().length === 0) {
            setValidate(false);
            return;
        }
        setValidate(true)
        getUser();
        navigate('/sessions')
    }

    return (
        <div className={styles.page}>
            <div className={styles.login}>
                <h1>Sign In lol</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={user.username}
                           className={classNames(styles.input, {[styles.invalid]: !validate})}
                           onChange={(e) => setUser(
                               prevState => {
                                   return {
                                       ...prevState, username: e.target.value
                                   }
                               }
                           )} placeholder="Nom d'utilisateur" required="required"/>
                    {!validate && <p className={styles.errorMessage}>username non valide au moins 5 caractères!</p>}
                    <input type="password" value={user.password}
                           className={classNames(styles.input, {[styles.invalid]: !validate})}
                           onChange={(e) => setUser(
                               prevState => {
                                   return {
                                       ...prevState, password: e.target.value
                                   }
                               }
                           )} placeholder="Mot de passe" required="required"/>
                    <button type="submit" className={styles.button}>Se Connecter</button>
                    <Link to="signUp">Creer un Compte</Link>
                    <Link to="forgotPassword">mot de passe oublié?</Link>
                </form>
            </div>
        </div>
    );
};

export default LoginPanel;
