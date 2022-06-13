import {useState} from 'react';
import styles from "./ForgotPass.module.css";
import classNames from "classnames";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {Alert} from "@mui/material";

const ForgotPass = () => {

    const [emailEntered, setEmailEntered] = useState("");
    const [validEmail, setValidEmail] = useState(true);
    const [emailUser, setEmailUser] = useState(null);
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
        if(validateEmail(emailEntered) == null) return;
        axios.post("http://localhost:5000/login/resetpassword",{
            email: emailEntered.toLowerCase()
        })
            .then(res => {
                if(res.data === false) setEmailUser(false)
                if(res.data === true) setEmailUser(true)
                console.log(res)
                return;
            })
            .catch(err => {
                console.log(err);
            })
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
                    {emailUser !== null && ( emailUser ? <Alert style={{backgroundColor:"hsla(131,42%,10%,.8)",color:"var(--bg-white-light)",marginBottom:"1em"}} severity="success">email envoye</Alert> : <Alert style={{backgroundColor:"hsla(3.86,71.55%,10.14%,.8)",color:"var(--bg-white-light)",marginBottom:"1em"}} severity="error">email non trouve!</Alert>)}
                    <button type="submit" className={styles.button}>Mot de passe oublié</button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPass;
