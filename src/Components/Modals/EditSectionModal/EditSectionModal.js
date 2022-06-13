import {Modal} from "../../index";
import styles from "./EditSectionModal.module.css"
import {SwatchesPicker} from "react-color";
import React, {useState} from "react";
import classNames from "classnames";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";

const EditSectionModal = (props) => {

    const [sectionName, setSectionName] = useState(props.section.nameSection);
    const [button, setButton] = useState(1);

    const sectionNameChangeHandler = (e) => {
        setSectionName(e.target.value);
    }

    const editSectionSubmitHandler = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (button === 2) {
            axios.delete(`http://localhost:5000/sections/delete/${props.section.idSection}`)
                .then(r => console.log(r))
                .catch(err => console.log(err));
        }
        if (button === 1) {
            console.log("button edit")
            const section = {
                nameSection: sectionName,
                sectionColor: props.color,
                session: props.session
            }
            axios.put(`http://localhost:5000/sections/update/${props.section.idSection}`, section)
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
        <Modal show={props.show} showModalHandler={props.showModalHandler}>
            <form className={styles.form} onSubmit={editSectionSubmitHandler}>
                <div className={styles["modal__title"]}>
                    <div>Modifier la section</div>
                    <span style={{display: 'grid', placeItems: 'center', cursor: 'pointer'}} onClick={() => props.closeModal(false)}><CloseIcon/></span>
                </div>
                <div className={styles["section__name"]}>
                    <label htmlFor="section__name">Nom de la section</label>
                    <input type="text" value={sectionName}
                           onChange={sectionNameChangeHandler}
                           placeholder="Nom de la section"
                           required={true}/>
                </div>
                <SwatchesPicker className='mt-2' color={props.color} onChange={props.changeColor}/>
                <div className={styles["button__group"]}>
                    <button onClick={() => setButton(1)} type="submit"
                            className={classNames(styles.editSection, styles["btn-1"])}>Modifier la section
                    </button>
                    <button onClick={() => setButton(2)} type="submit"
                            className={classNames(styles.deleteSection, styles["btn-2"])}>Supprimer la section
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default EditSectionModal;
