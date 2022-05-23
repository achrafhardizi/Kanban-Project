import styles from "./Profile.module.css";
import avatar from "../../../Assets/UserProfilePicutres/default-avatar-profile.jpg"
import {Sidebar} from "../../index";
import {useRef} from "react";
import {BsCamera} from "react-icons/bs"

const Profile = () => {
    const image = useRef(avatar)

    const loadProfilePicture = (event) => {
        console.log(event.target.files[0]);
        image.current.src = event.target.files[0];
    }


    return (
        <div className={styles.page}>
            <Sidebar/>
            <div className={styles.body}>
                <div className={styles.profile}>
                    <div className={styles["profile__picture"]}>
                        <label className={styles["profile__changePic"]} htmlFor="profilePic"><BsCamera/></label>
                        <input id="profilePic" type="file" onChange={loadProfilePicture}/>
                        <img ref={image} src={avatar} alt="user profile"/>
                    </div>
                    <div className={styles["profile__name"]}>
                        <h1>Nom d'utilisateur</h1>
                    </div>
                    <div className={styles["profileInfo__container"]}>
                        <div className={styles["profileInfo__card"]}>
                            <div className={styles["profileInfo__name"]}>
                                <span>Nom :</span> <p>{"john Doe"}</p>
                            </div>
                            <div className={styles["profileInfo__email"]}>
                                <span>E-mail :</span> <p>{"johndoe45@gmail.com"}</p>
                            </div>
                            <div className={styles["profileInfo__password"]}>
                                <span>Mot de passe :</span> <p>{"***************"}</p>
                            </div>
                        </div>
                        <button className={styles["edit__profileInfo"]}>Modifier les informations du profil</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
