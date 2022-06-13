import React, {useState} from "react";
import styles from "./EditProfileModal.module.css";
import classNames from "classnames";
import {Modal} from "../../index";
import axios from "axios";
import moment from "moment";
import CloseIcon from "@mui/icons-material/Close";

const EditModalProfile = (props) => {

    //11

    const [userInfo, setUserInfo] = useState({
        username:props.user.username,
        firstName:props.user.firstName,
        lastName:props.user.lastName,
        birthdate:props.user.birthdate,
        email:props.user.email,
        password:props.user.password,
        joindate:props.user.joindate,
    });

    const birthdayChangeHandler = (event) => {
        const newDate = moment(new Date(event.target.value)).format('YYYY-MM-DD');
        setUserInfo((prevState) => {
            return {...prevState,birthdate: newDate}
        });
    }

    const editProfileSubmitHandler = (e) => {
        const userId = localStorage.getItem("id")
        console.log(userInfo.birthdate);
        e.stopPropagation();
        e.preventDefault();
        axios.put(`http://localhost:5000/users/update/${userId}`,userInfo)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        window.location.reload()
    }

    return (
        <Modal show={props.show} showModalHandler={props.showModalHandler}>
            <form className={styles.form} onSubmit={editProfileSubmitHandler}>
                <div className={styles["modal__title"]}>
                    <div>Modifier votre Profile</div>
                <span style={{display: 'grid', placeItems: 'center', cursor: 'pointer'}} onClick={() => props.closeModal(false)}><CloseIcon/></span>
            </div>
                <div className={classNames(styles["formItem"])}>
                    <label htmlFor="">Nom d'utilisateur :</label>
                    <input type="text" value={userInfo.username} onChange={(e)=>{
                        setUserInfo((prev)=>{
                            return {...prev,username: e.target.value}
                        })
                    }}/>
                </div>
                <div className={classNames(styles["formItem"])}>
                    <label htmlFor="">Prenom :</label>
                    <input type="text" value={userInfo.firstName} onChange={(e)=>{
                        setUserInfo((prev)=>{
                            return {...prev,firstName: e.target.value}
                        })
                    }}/>
                </div>
                <div className={classNames(styles["formItem"])}>
                    <label htmlFor="">Nom :</label>
                    <input type="text" value={userInfo.lastName} onChange={(e)=>{
                        setUserInfo((prev)=>{
                            return {...prev,lastName: e.target.value}
                        })
                    }}/>
                </div>
                <div className={classNames(styles["formItem"])}>
                    <label htmlFor="">Date d'anniversaire :</label>
                    <input type="date"
                           onChange={birthdayChangeHandler}
                           defaultValue={moment(new Date(userInfo.birthdate)).format('YYYY-MM-DD')}/>
                </div>
                <div className={classNames(styles["formItem"])}>
                    <label htmlFor="">Email :</label>
                    <input type="text" value={userInfo.email} onChange={(e)=>{
                        setUserInfo((prev)=>{
                            return {...prev,email: e.target.value}
                        })
                    }}/>
                </div>
                <div className={classNames(styles["formItem"])}>
                    <label htmlFor="">Mot de passe :</label>
                    <input type="password" value={userInfo.password} onChange={(e)=>{
                        setUserInfo((prev)=>{
                            return {...prev,password: e.target.value}
                        })
                    }}/>
                </div>
                <div className={classNames(styles["joined__date"])}>Date d'insciption : {userInfo.joindate}</div>
                <button type="submit" className={classNames(styles.editProfile)}>Modifier Profile</button>
            </form>
        </Modal>
    );
};

export default EditModalProfile;
