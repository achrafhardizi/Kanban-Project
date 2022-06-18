import React, {useEffect, useState} from 'react';
import {Navbar, Section} from "../../index";
import Task from "../../Tasks/Task";
import styles from './workspace.module.css';
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useParams} from "react-router-dom";
import axios from "axios";
import Loader from "../../UI/Loader/Loader";

const Workspace = () => {

    let {sessionId} = useParams();
    const [membersCount,setMembersCount] = useState(null);
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);
    const [tags, setTags] = useState(null);

    useEffect(() => {
        axios.get(`https://kanbanboardbackend.herokuapp.com/sessions/get/${sessionId}`)
            .then(res => {
                console.log(res.data);
                let session = JSON.parse(localStorage.getItem(`${sessionId}`))
                setSession({...res.data,owned:session.owned})
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
        axios.get(`https://kanbanboardbackend.herokuapp.com/sessions/getcount/${sessionId}`)
            .then(res => {
                console.log(res.data);
                setMembersCount(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        axios.get("https://kanbanboardbackend.herokuapp.com/tags/getall")
            .then(res => {
                console.log(res)
                setTags(res.data);
            })
            .then(err => console.log(err))
    }, []);

    const addNewSection = () =>{
        const newSection ={
            nameSection :"nouvelle section",
            sectionColor : "#1f1f1f",
            session:session
        }
        axios.post(`https://kanbanboardbackend.herokuapp.com/sections/add`,newSection)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        window.location.reload();
    }


    return (
        <>
            {
                loading ? <Loader/> :
                <div className={styles.body}>
                    <Navbar tags={tags} sessionInfo={session} memberNum={membersCount}/>
                    <div className={styles.layout}>
                        {session.sections.map((e) => (
                            <Section session={session} section={e} key={e.idSection}>
                                {
                                    e.taches.map((task) => (
                                        <Task sessionId={sessionId} session={session} tags={tags} section={e} task={task} key={task.idTask}/>
                                    ))
                                }
                            </Section>))
                        }
                        <div className={styles.addSection} onClick={session.owned && addNewSection} >
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
