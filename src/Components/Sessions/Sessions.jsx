import styles from "./Sessions.module.css"
import {useState, useEffect} from "react";
import {AddSessionModal, Session} from "../index";
import {BsPlusLg} from "react-icons/bs"
import axios from "axios";


const Sessions = () => {

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


    const [showAddSessionModal, setShowAddSessionModal] = useState(false);

    const addSessionHandler = () => {
        setShowAddSessionModal(!showAddSessionModal);
    }

    return (
        <>
            {
                loading ? <p>loading </p> :
                <div className={styles.page}>
                    <div className={styles.container}>
                        {
                            userData["joined_sessions"].map((e) => (
                                <Session session={e}
                                         user = {userData}
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
                    <button className={styles["add__session"]} onClick={addSessionHandler}><BsPlusLg/></button>
                    <AddSessionModal show={showAddSessionModal} closeModal={setShowAddSessionModal} user={userData}/>
                </div>
            }
        </>

        // <div>{JSON.stringify(user.userData)}</div>
    )
        ;
};

export default Sessions;