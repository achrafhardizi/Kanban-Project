import React from 'react';
import styles from "./EditSessionModal.module.css";
import {BsFillPatchPlusFill} from "react-icons/bs";
import classNames from "classnames";
import {Modal} from "../../index";
import {SliderPicker} from "react-color";
import {useState} from "react";
import axios from "axios";

const EditSessionModal = (props) =>{

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

    const editSessionSubmitHandler = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if(button === 2){
            console.log("button 1");
            axios.delete(`http://localhost:5000/sessions/delete/${props.session.idSession}`)
                .then(r => console.log(r))
                .catch(err => console.log(err));
        }
        if(button === 1){
            console.log("button 2")
            const session = {
                owner:props.user,
                nameSession:sessionName,
                descSession: sessionDesc,
                bgColor: color,
            }
            axios.put(`http://localhost:5000/sessions/update/${props.session.idSession}`, session)
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
        <Modal show={props.show}>
            <form className={styles.form} onSubmit={editSessionSubmitHandler}>
                <div className={styles["modal__title"]}>Modifier la session</div>
                <div className={styles["session__textInfo"]}>
                    <div className={styles["session__name"]}>
                        <label htmlFor="session__name">Nom de la session</label>
                        <input type="text" value={sessionName} placeholder="Nom de la tâche" required={true} onChange={sessionNameChangeHandler}/>
                    </div>
                    <div className={styles["session__description"]}>
                        <label htmlFor="session__description">Description de la session</label>
                        <textarea cols="30" rows="5" value={sessionDesc !== null ? sessionDesc : "description"} onChange={sessionDescChangeHandler}/>
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
                    <div className={styles["members__group"]}>
                        {/*  Todo:add Members picture  */}
                        <BsFillPatchPlusFill style={{color: "hsl(216,13.51%,72.75%)"}} size={30}/>
                    </div>
                </div>
                <div className={styles["session__color"]}>
                    <label >Couleur de session</label>
                    <SliderPicker styles={{width: "100%",marginTop:"1em"}} className='mt-2' color={color} onChange={changeColor}/>
                </div>
                <div className={styles["button__group"]}>
                    <button onClick={()=>setButton(1)} type="submit" name="editSession" className={classNames(styles.editSession, styles["btn-1"])}>Modifier la session
                    </button>
                    <button onClick={()=>setButton(2)} type="submit" name="deleteSession" className={classNames(styles.deleteSession, styles["btn-2"])}>Supprimer la session
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default EditSessionModal;
