import styles from "./Profile.module.css";
import avatar from "../../../Assets/UserProfilePicutres/default-avatar-profile.jpg"
import {EditProfileModal, Sidebar} from "../../index";
import {useEffect, useState} from "react";
import {BsCamera} from "react-icons/bs"
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Loader from "../../UI/Loader/Loader";

const Profile = () => {


    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    let navigate = useNavigate();

    useEffect(() => {
        setTimeout(()=>{
            const userId = localStorage.getItem("id")
            axios.get(`http://localhost:5000/users/get/${userId}`)
                .then(res => {
                    console.log(res.data);
                    setUserData(res.data);
                    setLoading(false);
                })
                .catch(err => {
                    console.log(err);
                    setNotFound(true);
                    setLoading(false);
                })
        },1000)
    }, []);


    const [showEditProfileModal, setShowEditProfileModal] = useState(false);

    let [profilePicture, setProfilePicture] = useState(avatar)

    const loadProfilePicture = (event) => {
        setProfilePicture(URL.createObjectURL(event.target.files[0]));
        console.log(event.target.files[0]);
    }


    return (
        <>
            {
                loading ? <Loader/> :
                    (notFound ?
                            <div className={styles.page}>
                                <div className={styles["d-flex"]}>
                                    <span className={styles["notFound"]}>Utilisateur non trouvé</span>
                                    <button onClick={() => {
                                        navigate('/')
                                    }}>retour à la connexion
                                    </button>
                                </div>
                            </div>
                            :
                            <div className={styles.page}>
                                <Sidebar/>
                                <div className={styles.body}>
                                    <div className={styles.profile}>
                                        <div className={styles["profile__picture"]}>
                                            <label className={styles["profile__changePic"]}
                                                   htmlFor="profilePic"><BsCamera/></label>
                                            <input id="profilePic" type="file" onChange={loadProfilePicture}/>
                                            <img src={profilePicture} alt="user profile"/>
                                        </div>
                                        <div className={styles["profile__name"]}>
                                            <h1>Nom d'utilisateur</h1>
                                        </div>
                                        <div className={styles["profileInfo__container"]}>
                                            <div className={styles["profileInfo__card"]}>
                                                <div className={styles["profileInfo__password"]}>
                                                    <span>Nom d'utilisateur :</span> <p>{userData.username}</p>
                                                </div>
                                                <div className={styles["profileInfo__name"]}>
                                                    <span>Prenom :</span> <p>{userData.firstName}</p>
                                                </div>
                                                <div className={styles["profileInfo__name"]}>
                                                    <span>Nom :</span> <p>{userData.lastName}</p>
                                                </div>
                                                <div className={styles["profileInfo__email"]}>
                                                    <span>Date d'anniversaire :</span> <p>{userData.birthdate}</p>
                                                </div>
                                                <div className={styles["profileInfo__email"]}>
                                                    <span>E-mail :</span> <p>{userData.email}</p>
                                                </div>

                                                <div className={styles["profileInfo__password"]}>
                                                    <span>Mot de passe :</span> <p>{userData.password}</p>
                                                </div>
                                            </div>
                                            <button className={styles["edit__profileInfo"]}
                                                    onClick={() => setShowEditProfileModal(true)}
                                            >Modifier les informations du profil
                                            </button>
                                            <EditProfileModal show={showEditProfileModal} user={userData}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    )
            }
        </>
    );
};

export default Profile;
