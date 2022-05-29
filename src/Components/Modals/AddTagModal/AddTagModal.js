import styles from "./AddTagModal.module.css"
import {Modal} from "../../index";
import {SwatchesPicker} from "react-color";
import React, {useEffect, useState} from "react";
import classNames from "classnames";
import {FaTimes} from "react-icons/fa";
import axios from "axios";

const AddTagModal = (props) => {


    const [tagName, setTagName] = useState("");
    const [color, setColor] = useState('#fff');

    const changeColor = (updatedColor) => {
        setColor(updatedColor.hex);
    }

    const deleteTag = (idTag) => {
        axios.delete(`http://localhost:5000/tags/delete/${idTag}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        window.location.reload();
    }

    const addTagSubmitHandler = () => {
        if(tagName.trim().length===0) return;
        const tag={
            nameTag:tagName,
            tagColor:color
        }
        axios.post("http://localhost:5000/tags/add/",tag)
            .then(res=>console.log(res))
            .catch(err => console.log(err))
        window.location.reload();
    }

    return (
        <Modal show={props.show} showModalHandler={props.showModalHandler}>
            <form className={styles.form} onSubmit={addTagSubmitHandler}>
                <div className={styles["modal__title"]}>Ajouter étiquette</div>
                <div className={styles["tag__name"]}>
                    <label htmlFor="tag__name">Nom de l'étiquette</label>
                    <input type="text" value={tagName}
                           onChange={(e) => setTagName(e.target.value)}
                           placeholder="Tag Name" required={true}/>
                </div>
                <div className={styles["task__tags"]}>
                    <label htmlFor="task__members">Étiquettes :</label>
                    <div className={styles["tags__group"]}>
                        {props.tags===null ? "test" : props.tags.map(tag => (
                            <div className={styles["tagItem"]} key={tag.idTag}>
                                <div style={{backgroundColor: tag.tagColor}}>{tag.nameTag}</div>
                                <FaTimes onClick={() => deleteTag(tag.idTag)}/>
                            </div>
                        ))}
                    </div>
                </div>
                <SwatchesPicker className='mt-2' color={color} onChange={changeColor}/>
                <button type="submit" className={classNames(styles.addTag, styles["btn-1"])}>Ajouter étiquette</button>
            </form>
        </Modal>
    );
};

export default AddTagModal;
