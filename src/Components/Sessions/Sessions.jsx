import styles from "./Sessions.module.css"
import {useState} from "react";
import {Session} from "../index";
import {BsPlusLg} from "react-icons/bs"

const Sessions = (props) => {

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                {
                    props.sessions.map((e) => (
                        <Session session={e} key={e.sessionId}/>
                    ))
                }
            </div>
            <button className={styles["add__session"]}><BsPlusLg/></button>
        </div>
    );
};

export default Sessions;