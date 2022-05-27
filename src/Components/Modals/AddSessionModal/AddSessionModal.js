import React, {useEffect} from 'react';
import styles from "./AddSessionModal.module.css";
import {SliderPicker} from "react-color";
import classNames from "classnames";
import {Modal} from "../../index";
import {useState} from "react";
import {BsFillPatchPlusFill} from "react-icons/bs";
import axios from "axios";

const AddSessionModal = (props) => {

    const [color, setColor] = useState('#eaecef');
    const [sessionName, setSessionName] = useState("");
    const [sessionDesc, setSessionDesc] = useState("");

    const changeColor = (updatedColor) => {
        setColor(updatedColor.hex);
    }

    const addSessionSubmitHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if(sessionName.trim().length === 0) return;
        if(sessionDesc.trim().length !== 0){
            const session = {
                owner:props.user,
                nameSession: sessionName,
                descSession: sessionDesc,
                bgColor:color
            }
            axios.post(`http://localhost:5000/sessions/add`, session)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error);
                });
            window.location.reload();
            return;
        }
        const session = {
            owner:props.user,
            nameSession: sessionName,
            bgColor:color
        }
        axios.post(`http://localhost:5000/sessions/add`, session)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            });
        props.closeModal(false);
        window.location.reload()
    }

    return (
        <Modal show={props.show} showModalHandler={props.showModalHandler}>
            <form className={styles.form} onSubmit={addSessionSubmitHandler}>
                <div className={styles["modal__title"]}>Ajouter une session</div>
                <div className={styles["session__textInfo"]}>
                    <div className={styles["session__name"]}>
                        <label htmlFor="session__name">Nom de la session</label>
                        <input type="text" value={sessionName} placeholder="Nom de la session" required={true}
                               onChange={(e)=>setSessionName(e.target.value)}/>
                    </div>
                    <div className={styles["session__description"]}>
                        <label htmlFor="task__description">Description de la session</label>
                        <textarea cols="30" rows="5"
                                  value={sessionDesc}
                                  placeholder="Description de la session"
                                  onChange={(e)=>setSessionDesc(e.target.value)}/>
                    </div>
                </div>
                <div className={styles["session__color"]}>
                    <label >Couleur de session</label>
                    <SliderPicker styles={{width: "100%",marginTop:"1em"}} className='mt-2' color={color} onChange={changeColor}/>
                </div>
                <button type="submit" className={classNames(styles.editSession, styles["btn-1"])}>Ajouter session
                </button>
            </form>
        </Modal>
    );
};

export default AddSessionModal;
