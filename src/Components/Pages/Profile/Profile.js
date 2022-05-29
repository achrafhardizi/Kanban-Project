import styles from "./Profile.module.css";
import avatar from "../../../Assets/UserProfilePicutres/default-avatar-profile.jpg"
import {EditProfileModal, Sidebar} from "../../index";
import {useRef, useState} from "react";
import {BsCamera} from "react-icons/bs"

const Profile = ({username, firstName, lastName, email, birthday, password, joindate}) => {

    const [showEditProfileModal, setShowEditProfileModal] = useState(false);

    let [profilePicture, setProfilePicture] = useState(avatar)

    const loadProfilePicture = (event) => {
        setProfilePicture(URL.createObjectURL(event.target.files[0]));
        console.log(event.target.files[0]);
    }


    return (
        <div className={styles.page}>
            <Sidebar/>
            <div className={styles.body}>
                <div className={styles.profile}>
                    <div className={styles["profile__picture"]}>
                        <label className={styles["profile__changePic"]} htmlFor="profilePic"><BsCamera/></label>
                        <input id="profilePic" type="file" onChange={loadProfilePicture}/>
                        <img src={profilePicture} alt="user profile"/>
                    </div>
                    <div className={styles["profile__name"]}>
                        <h1>Nom d'utilisateur</h1>
                    </div>
                    <div className={styles["profileInfo__container"]}>
                        <div className={styles["profileInfo__card"]}>
                            <div className={styles["profileInfo__password"]}>
                                <span>Nom d'utilisateur :</span> <p>{username}</p>
                            </div>
                            <div className={styles["profileInfo__name"]}>
                                <span>Prenom :</span> <p>{firstName}</p>
                            </div>
                            <div className={styles["profileInfo__name"]}>
                                <span>Nom :</span> <p>{lastName}</p>
                            </div>
                            <div className={styles["profileInfo__email"]}>
                                <span>Date d'anniversaire :</span> <p>{birthday}</p>
                            </div>
                            <div className={styles["profileInfo__email"]}>
                                <span>E-mail :</span> <p>{email}</p>
                            </div>

                            <div className={styles["profileInfo__password"]}>
                                <span>Mot de passe :</span> <p>{password}</p>
                            </div>
                        </div>
                        <button className={styles["edit__profileInfo"]}
                                onClick={()=>setShowEditProfileModal(true)}
                        >Modifier les informations du profil</button>
                        <EditProfileModal show={showEditProfileModal}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
