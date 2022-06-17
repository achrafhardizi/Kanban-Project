import styles from "./EditTaskModal.module.css"
import { Modal} from "../../index";
import React, {useEffect, useState} from "react";
import classNames from "classnames";
import moment from "moment";
import {FaCheck, FaTimes} from "react-icons/fa"
import axios from "axios";
import {FormControl, FormHelperText, InputLabel, MenuItem, Select} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";


const EditTaskModal = (props) => {

    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [taskUsers, setTaskUsers] = useState([]);
    const [button, setButton] = useState(1);
    const [taskName, setTaskName] = useState(props.task.nameTask);
    const [taskDesc, setTaskDesc] = useState(props.task.descriptionTask);
    const [startDate, setStartDate] = useState(props.task.startDate);
    const [finishDate, setFinishDate] = useState(props.task.finishDate);
    const [newsection, setNewSection] = useState(props.section.idSection);
    const [Sections, setSections] = useState([]);



    const startDateOnChangeHandler = (event) => {
        const newDate = moment(new Date(event.target.value)).format('YYYY-MM-DD');
        setStartDate(newDate);
    }

    const finishDateOnChangeHandler = (event) => {
        const newDate = moment(new Date(event.target.value)).format('YYYY-MM-DD');
        setFinishDate(newDate);
    }

    useEffect(() => {
        console.log(props.sessionId);
        axios.get(`http://localhost:5000/sessions/getsessionusers/${props.sessionId}`)
            .then(res => {
                setUsers(res.data)
                setLoading(false);
            })
            .catch(err => console.log(err))
        axios.get(`http://localhost:5000/tasks/gettaskusers/${props.task.idTask}`)
            .then(res => {
                setTaskUsers(res.data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, []);
    axios.get('http://localhost:5000/sessions/get/'+props.sessionId)
        .then(res => {
            setSections(res.data.sections)
            setLoading(false)
        })
        .catch(err => {
            console.log(err);
        })

    const ChangeSection = (event) => {
        setNewSection(event.target.value);
    };


    const assignTask = (idUser) => {
        axios.post(`http://localhost:5000/tasks/addusers/${idUser}/${props.task.idTask}`)
            .then(r => console.log(r))
            .catch(err => console.log(err))
        window.location.reload();
    }

    const removeTask = idUser => {
        axios.delete(`http://localhost:5000/tasks/removeusers/${idUser}/${props.task.idTask}`)
            .then(r => console.log(r))
            .catch(err => console.log(err))
        window.location.reload();
    }

    const deleteTagFromTask = (idTag) => {
        axios.delete(`http://localhost:5000/tasks/removetag/${props.task.idTask}/${idTag}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        window.location.reload();
    }

    const addTagToTask = (idTag) => {
        axios.post(`http://localhost:5000/tasks/addtag/${props.task.idTask}/${idTag}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        window.location.reload();
    }

    const editTaskSubmitHandler = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (button === 2) {
            axios.delete(`http://localhost:5000/tasks/delete/${props.task.idTask}`)
                .then(r => console.log(r))
                .catch(err => console.log(err));
        }
        if (button === 1) {
            const task = {
                nameTask: taskName,
                descriptionTask: taskDesc ? taskDesc : "",
                colorTask: props.task.colorTask,
                startDate: startDate,
                finishDate: finishDate,
                section: {
                    idSection: newsection
                }
            }
            console.log(task);
            axios.put(`http://localhost:5000/tasks/update/${props.task.idTask}`, task)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        }
        window.location.reload();
    }

    return (
        <>
            {
                loading ? <p style={{display: "none"}}>Loading</p> :
                    <Modal show={props.show}>
                        <form className={styles.form} onSubmit={editTaskSubmitHandler}>
                            <div className={styles["modal__title"]}>
                                <div>Modifier la tâche</div>
                            <span style={{display: 'grid', placeItems: 'center', cursor: 'pointer'}} onClick={() => props.closeModal(false)}><CloseIcon/></span>
                        </div>
                            <div className={styles["task__textInfo"]}>
                                <div className={styles["task__name"]}>
                                    <label htmlFor="task__name">Nom de la tâche</label>
                                    <input type="text"
                                           value={taskName}
                                           onChange={(e) => setTaskName(e.target.value)}
                                           required={true}/>
                                </div>

                                <div className={styles["task__description"]}>
                                    <label htmlFor="task__description">Description de la tâche</label>
                                    <textarea cols="30" rows="5" value={taskDesc ? taskDesc : ""}
                                              onChange={(e) => setTaskDesc(e.target.value)}/>
                                </div>
                            </div>

                            <div>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Changer Section</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={newsection}
                                        label="Changer Section"
                                        onChange={ChangeSection}

                                    >
                                        {Sections.map(sec => (
                                            <MenuItem key={sec.idSection} value={sec.idSection}>{sec.nameSection}</MenuItem>
                                        ))}

                                    </Select>
                                    <FormHelperText>Deplacer la tâche</FormHelperText>
                                </FormControl>
                            </div>

                            <div className={styles["task__members"]}>
                                <label htmlFor="task__members">Qui doit faire cette tâche</label>
                                <div className={styles["members__group"]}>
                                    {
                                        taskUsers===null ? "test" : taskUsers.map(user => (
                                            <div className={styles["user"]} key={user.id_user}>
                                                <div>{user.username}</div>
                                                <FaTimes onClick={()=>removeTask(user.id_user)}/>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={styles["task__members"]}>
                                <label htmlFor="task__members">Attibuer au Membres :</label>
                                <div className={styles["members__group"]}>
                                    {
                                        users.filter(user => {
                                            if(taskUsers === null) return;
                                            let taskUsersId = taskUsers.map(user => { return  user.id_user})
                                            return !taskUsersId.includes(user.id_user)
                                        }).map(user => (
                                            <div className={styles["user"]} key={user.id_user}>
                                                <div>{user.username}</div>
                                                <FaCheck onClick={()=>assignTask(user.id_user)} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={styles["task__tags"]}>
                                <label htmlFor="task__members">Étiquettes :</label>
                                <div className={styles["tags__group"]} style={{gridTemplateRows: props.task.taches_tags.length}}>
                                    {props.task.taches_tags.map(tag => (
                                        <div className={styles["tagItem"]} key={tag.idTag}>
                                            <div style={{backgroundColor: tag.tagColor}}>{tag.nameTag}</div>
                                            <FaTimes onClick={()=>deleteTagFromTask(tag.idTag)}/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles["task__tags"]}>
                                <label htmlFor="task__members">Attribuer Étiquette :</label>
                                <div className={styles["tags__group"]} style={{gridTemplateRows: 3}}>
                                    {props.tags.map(tag => (
                                        <div className={styles["tagItem"]} key={tag.idTag}>
                                            <div style={{backgroundColor: tag.tagColor}}>{tag.nameTag}</div>
                                            <FaCheck onClick={()=>addTagToTask(tag.idTag)}/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={styles["task__dates"]}>
                                <div className={styles["task__startDay"]}>
                                    <label>Date de début :</label>
                                    <input type="date" name="startDay" id="startDay" defaultValue={startDate}
                                           onChange={startDateOnChangeHandler}
                                    />
                                </div>
                                <div className={styles["task__finishDay"]}>
                                    <label>Date de fin :</label>
                                    <input type="date" name="finishDay" value={finishDate} id="finishDay"
                                           min={startDate}
                                           onChange={finishDateOnChangeHandler}/>
                                </div>
                            </div>
                            <div className={styles["button__group"]}>
                                <button onClick={() => setButton(1)} type="submit"
                                        className={classNames(styles.editTask, styles["btn-1"])}>Modifier la tâche
                                </button>
                                <button onClick={() => setButton(2)} type="submit"
                                        className={classNames(styles.deleteTask, styles["btn-2"])}>Supprimer la tâche
                                </button>
                            </div>
                        </form>
                    </Modal>
            }
        </>
    );
};

export default EditTaskModal;
