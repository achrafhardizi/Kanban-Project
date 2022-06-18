import React, {useEffect} from 'react';
import styles from "./EditSessionModal.module.css";
import {BsFillPatchPlusFill} from "react-icons/bs";
import classNames from "classnames";
import {Modal} from "../../index";
import {SliderPicker} from "react-color";
import {useState} from "react";
import axios from "axios";
import {FaCheck, FaTimes} from "react-icons/fa";
import CloseIcon from "@mui/icons-material/Close";

const EditSessionModal = (props) => {

    const [loading, setLoading] = useState(true);
    const [sessionUsers, setSessionUsers] = useState(null);
    const [allUsers, setAllUsers] = useState([]);
    const [color, setColor] = useState(props.session.bgColor);
    const [button, setButton] = useState(1);
    const [sessionName, setSessionName] = useState(props.session.nameSession);
    const [sessionDesc, setSessionDesc] = useState(props.session.descSession);

    const changeColor = (updatedColor) => {
        setColor(updatedColor.hex);

    }

    const sessionNameChangeHandler = (e) => {
        setSessionName(e.target.value);
    }

    const sessionDescChangeHandler = (e) => {
        setSessionDesc(e.target.value)
    }

    useEffect(() => {
        axios.get("https://kanbanboardbackend.herokuapp.com/users/getall")
            .then(res => {
                setAllUsers(res.data);
                console.log(res.data);
                setLoading(false)
            })
            .catch(err => console.log(err))
        axios.get(`https://kanbanboardbackend.herokuapp.com/sessions/getsessionusers/${props.session.idSession}`)
            .then(res => {
                console.log(res.data)
                setSessionUsers(res.data)

            })
            .catch(err => console.log(err))

    }, []);


    const addUsertoSession = (idUser) => {
        if(idUser === props.user.idUser) return;
        axios.post(`https://kanbanboardbackend.herokuapp.com/users/join/${props.session.idSession}/${idUser}`)
            .then(r => console.log(r))
            .catch(err => console.log(err))
        window.location.reload()
    }

    const deleteUserfromSession = (idUser) => {
        axios.delete(`https://kanbanboardbackend.herokuapp.com/users/leave/${props.session.idSession}/${idUser}`)
            .then(r => console.log(r))
            .catch(err => console.log(err))
        window.location.reload()
    }

    const editSessionSubmitHandler = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (button === 2) {
            console.log("button 1");
            axios.delete(`https://kanbanboardbackend.herokuapp.com/sessions/delete/${props.session.idSession}`)
                .then(r => console.log(r))
                .catch(err => console.log(err));
        }
        if (button === 1) {
            console.log("button 2")
            const session = {
                owner: props.user,
                nameSession: sessionName,
                descSession: sessionDesc,
                bgColor: color,
            }
            console.log(session);
            axios.put(`https://kanbanboardbackend.herokuapp.com/sessions/update/${props.session.idSession}`, session)
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
            {loading ?
                <p style={{display:"none"}}>loading</p> :
                <Modal show={props.show}>
                    <form className={styles.form} onSubmit={editSessionSubmitHandler}>
                        <div className={styles["modal__title"]}>
                            <div>Modifier la session</div>
                            <span style={{display: 'grid', placeItems: 'center', cursor: 'pointer'}} onClick={() => props.closeModal(false)}><CloseIcon/></span>
                        </div>
                        <div className={styles["session__textInfo"]}>
                            <div className={styles["session__name"]}>
                                <label htmlFor="session__name">Nom de la session</label>
                                <input type="text" value={sessionName} placeholder="Nom de la tâche" required={true}
                                       onChange={sessionNameChangeHandler}/>
                            </div>
                            <div className={styles["session__description"]}>
                                <label htmlFor="session__description">Description de la session</label>
                                <textarea cols="30" rows="5" value={sessionDesc !== null ? sessionDesc : "description"}
                                          onChange={sessionDescChangeHandler}/>
                            </div>
                        </div>
                        <div className={styles["session__owner"]}>
                            <label htmlFor="session__owner">Owner :</label>
                            <div className={styles["owner"]}>
                                <span>{props.user.username}</span>
                            </div>
                        </div>
                        <div className={styles["session__members"]}>
                            <label htmlFor="session__members">Membres :</label>
                            <div className={styles["members_x_group"]}>
                                {
                                    sessionUsers===null ? "test" : sessionUsers.map(user => (
                                        <div className={styles["user"]} key={user.id_user}>
                                            <div>{user.username}</div>
                                            <FaTimes onClick={()=>deleteUserfromSession(user.id_user)}/>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={styles["session__members"]}>
                            <label htmlFor="session__members">Ajouter un membre :</label>
                            <div className={styles["members_x_group"]}>
                                {
                                    allUsers.map(user => (
                                        <div className={styles["user"]} key={user.idUser}>
                                            <div>{user.username}</div>
                                            <FaCheck onClick={() => addUsertoSession(user.idUser)}/>
                                        </div>
                                    ))
                                }
                                </div>
                        </div>
                        <div className={styles["session__color"]}>
                            <label>Couleur de session</label>
                            <SliderPicker styles={{width: "100%", marginTop: "1em"}} className='mt-2' color={color}
                                          onChange={changeColor}/>
                        </div>
                        <div className={styles["button__group"]}>
                            <button onClick={() => setButton(1)} type="submit" name="editSession"
                                    className={classNames(styles.editSession, styles["btn-1"])}>Modifier la session
                            </button>
                            <button onClick={() => setButton(2)} type="submit" name="deleteSession"
                                    className={classNames(styles.deleteSession, styles["btn-2"])}>Supprimer la session
                            </button>
                        </div>
                    </form>
                </Modal>
            }
        </>
    );
};

export default EditSessionModal;
