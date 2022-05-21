import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import styles from "./SignUp.module.css"
import classNames from "classnames";


const SignUp = () => {

    // useEffect(() => {
    //     if(confirmPassEntered !== passEntered){
    //         setValidateConfirmPass(false);
    //         return;
    //     }
    //     setValidateConfirmPass(true);
    // }, [confirmPassEntered]);

    const [usernameEntered, setUsernameEntered] = useState("");
    const [passEntered, setPassEntered] = useState("");
    const [confirmPassEntered, setConfirmPassEntered] = useState("");
    const [validateUser, setValidateUser] = useState(true);
    const [validatePass, setValidatePass] = useState(true);
    const [validateConfirmPass, setValidateConfirmPass] = useState(true);
    const regex = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})");
    let navigate = useNavigate();

    const usernameChangeHandler = (event) => {
        setUsernameEntered(event.target.value)
        if(!usernameEntered.trim().length || usernameEntered.trim().length < 5){
            setValidateUser(false);
            return;
        }
        setValidateUser(true);
    }

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
        if(confirmPassEntered !== passEntered){
            setValidateConfirmPass(false);
            return;
        }
        setValidateConfirmPass(true);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if(!(validateUser && validatePass && validateConfirmPass)) return;
        navigate('/sessions')
    }

    return (
        <div className={styles.page}>
            <div className={styles.signup}>
                <h1>SignUp</h1>
                <form method="post" onSubmit={handleSubmit}>
                    <input type="text" value={usernameEntered}
                           className={classNames(styles.input, {[styles.invalid]: !validateUser})}
                           onChange={usernameChangeHandler} placeholder="username" required="required"/>
                    {!validateUser && <p className={styles.errorMessage}>username non valide au moins 5 caractères!</p>}
                    <input type="password"
                           className={classNames(styles.input, {[styles.invalid]: !validatePass})}
                           onChange={passChangeHandler} placeholder="Mot de passe" required="required"/>
                    {!validatePass && <p className={styles.errorMessage}>Le mot de passe doit comporter au moins une lettre minuscule, une lettre majuscule, un chiffre et un caractère spécial, et doit comporter au moins huit caractères.</p>}
                    <input type="password"
                           className={classNames(styles.input, {[styles.invalid]: !validateConfirmPass})}
                           onChange={confirmPassChangeHandler} placeholder="Confirmer mot de passe" required="required"/>
                    {!validateConfirmPass && <p className={styles.errorMessage}>le mot de passe ne correspond pas à la confirmation du mot de passe</p>}
                    <button type="submit" className={styles.button}>S'inscrire</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
