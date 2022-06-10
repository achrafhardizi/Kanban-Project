import styles from "./Sessions.module.css"
import {useState, useEffect} from "react";
import {AddSessionModal, Session} from "../index";
import {BsPlusLg} from "react-icons/bs"
import axios from "axios";
import Loader from "../UI/Loader/Loader";
import {useNavigate} from "react-router-dom";


const Sessions = () => {

    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    let navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
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
        }, 1000)

    }, []);


    const [showAddSessionModal, setShowAddSessionModal] = useState(false);

    const addSessionHandler = () => {
        setShowAddSessionModal(!showAddSessionModal);
    }

    return (
        <>
            {
                loading ? <Loader/> :
                    (notFound ?
                            <div className={styles.page}>
                                <div className={styles["d-flex"]}>
                                    <span className={styles["notFound"]}>Utilisateur non trouvé</span>
                                    <button onClick={()=>{
                                        navigate('/')
                                    }}>retour à la connexion</button>
                                </div>
                            </div>
                            :
                            <div className={styles.page}>
                                <div className={styles.container}>
                                    {
                                        userData["joined_sessions"].map((e) => (
                                            <Session session={e}
                                                     user={userData}
                                                     id={e.idSession}
                                                     owned={false} key={e.idSession}/>
                                        ))
                                    }
                                    {
                                        userData["owned_sessions"].map((e) => (
                                            <Session session={e}
                                                     user={userData}
                                                     id={e.idSession}
                                                     owned={true} key={e.idSession}/>
                                        ))
                                    }
                                </div>
                                <button className={styles["add__session"]} onClick={addSessionHandler}><BsPlusLg/>
                                </button>
                                <AddSessionModal show={showAddSessionModal} closeModal={setShowAddSessionModal}
                                                 user={userData}/>
                            </div>
                    )

            }
        </>

        // <div>{JSON.stringify(user.userData)}</div>
    )
        ;
};

export default Sessions;