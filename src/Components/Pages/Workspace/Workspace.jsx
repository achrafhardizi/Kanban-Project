import React, {useEffect, useState} from 'react';
import {Navbar, Section} from "../../index";
import Task from "../../Tasks/Task";
import styles from './workspace.module.css';
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useParams} from "react-router-dom";
import axios from "axios";

const Workspace = () => {

    let {sessionId} = useParams();
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userId = localStorage.getItem("id")
        axios.get(`http://localhost:5000/sessions/get/${sessionId}`)
            .then(res => {
                console.log(res.data);
                setSession(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })

    }, []);

    const addNewSection = () =>{
        const newSection ={
            nameSection :"nouvelle section",
            sectionColor : "#fff",
            session:session
        }
        axios.post(`http://localhost:5000/sections/add`,newSection)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        window.location.reload();
    }

    return (
        <>
            {
                loading ? <p>loading </p> :
                <div className={styles.body}>
                    <Navbar sessionInfo={session}/>
                    <div className={styles.layout}>
                        {session.sections.map((e) => (
                            <Section session={session} section={e} key={e.idSection}>
                                {
                                    e.taches.map((task, i) => (
                                        <Task task={task} key={task.idTask}/>
                                    ))
                                }
                            </Section>))
                        }
                        <div className={styles.addSection} onClick={addNewSection} >
                            <span>Ajouter une Section</span>
                            <FontAwesomeIcon icon={faCirclePlus}/>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Workspace;
