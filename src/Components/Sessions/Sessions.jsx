import styles from "./Sessions.module.css"
import {useState} from "react";
import {AddSessionModal, Session} from "../index";
import {BsPlusLg} from "react-icons/bs"

const Sessions = (props) => {

    const [showAddSessionModal, setShowAddSessionModal] = useState(false);

    const addSessionHandler = () => {
        setShowAddSessionModal(!showAddSessionModal);
    }

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                {
                    props.sessions.map((e) => (
                        <Session session={e} key={e.sessionId}/>
                    ))
                }
            </div>
            <button className={styles["add__session"]} onClick={addSessionHandler}><BsPlusLg/></button>
            <AddSessionModal show={showAddSessionModal}/>
        </div>
    );
};

export default Sessions;