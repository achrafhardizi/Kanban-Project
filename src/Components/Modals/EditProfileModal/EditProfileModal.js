import React,{useEffect, useState} from "react";
import styles from "./EditProfileModal.module.css";
import classNames from "classnames";
import {Modal} from "../../index";
import axios from "axios";

const EditModalProfile = (props) => {

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userId = localStorage.getItem("id")
        axios.get(`http://localhost:5000/users/get/${userId}`)
            .then(res => {
                console.log(res.data);
                setUserData(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })

    }, []);

    const editProfileSubmitHandler = () => {

    }

    return (
        <>
            {
                loading ?
                    <p style={{display:"none"}}>Loading</p>
                    :
                <Modal show={props.show} showModalHandler={props.showModalHandler}>
                    <form className={styles.form} onSubmit={editProfileSubmitHandler}>
                        <div className={styles["modal__title"]}>Modifier votre Profile</div>
                        <div className={classNames(styles["formItem"])}>
                            <label htmlFor="">Nom d'utilisateur :</label>
                            <input type="text" name="" id=""/>
                        </div>
                        <div className={classNames(styles["formItem"])}>
                            <label htmlFor="">Prenom :</label>
                            <input type="text" name="" id=""/>
                        </div>
                        <div className={classNames(styles["formItem"])}>
                            <label htmlFor="">Nom :</label>
                            <input type="text" name="" id=""/>
                        </div>
                        <div className={classNames(styles["formItem"])}>
                            <label htmlFor="">Date d'anniversaire :</label>
                            <input type="text" name="" id=""/>
                        </div>
                        <div className={classNames(styles["formItem"])}>
                            <label htmlFor="">Email :</label>
                            <input type="text" name="" id=""/>
                        </div>
                        <div className={classNames(styles["formItem"])}>
                            <label htmlFor="">Mot de passe :</label>
                            <input type="text" name="" id=""/>
                        </div>
                        <div className={classNames(styles["joined__date"])}>Date d'insciption</div>
                        <button type="submit" className={classNames(styles.editProfile)}>Modifier Profile</button>
                    </form>
                </Modal>
            }
        </>
    );
};

export default EditModalProfile;
