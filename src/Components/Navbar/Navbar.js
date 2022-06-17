import styles from "./Navbar.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-regular-svg-icons"
import {useRef, useState} from "react";
import classNames from "classnames";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons";
import {AddTagModal} from "../index";


const Navbar = (props) => {
    const [clicked, setClicked] = useState(false);
    const [selected, setSelected] = useState("Filtre");
    const [showModal, setShowModal] = useState(false);

    const addTagClickHandler = () => {
        if(props.sessionInfo.owned) setShowModal(!showModal);
    }

    const selectClickHandler = () => {
        setClicked(!clicked)
    }

    const optionClickHandler = (event) => {
        let optionSelected = event.target.querySelector("label").textContent;
        setSelected(optionSelected)
        selectClickHandler();
    }


    return (
        <div className={styles.navbar}>
            <div className={styles["nav__top"]}>
                <h1 className={styles["nav__title"]}>{props.sessionInfo.nameSession}</h1>
                <div className={styles["usersNum"]}>
                    <FontAwesomeIcon icon={faUserCircle}/> / {props.memberNum+1}
                </div>
            </div>
            <div className={styles["nav__bot"]}>
                {/*<div className={styles["select-box"]}>*/}
                {/*    <div className={classNames(styles["options-container"],{[styles["active"]]:clicked})}>*/}
                {/*        <div className={styles["option"]} onClick={optionClickHandler}>*/}
                {/*            <input type="radio" className={styles["radio"]} id="section" name="filter"/>*/}
                {/*            <label htmlFor="section">Section</label>*/}
                {/*        </div>*/}

                {/*        <div className={styles["option"]} onClick={optionClickHandler}>*/}
                {/*            <input type="radio" className={styles["radio"]} id="tag" name="filter"/>*/}
                {/*            <label htmlFor="tag">Etiquette</label>*/}
                {/*        </div>*/}

                {/*        <div className={styles["option"]} onClick={optionClickHandler}>*/}
                {/*            <input type="radio" className={styles["radio"]} id="state" name="filter"/>*/}
                {/*            <label htmlFor="state">État</label>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <div className={styles["selected"]} onClick={selectClickHandler}>*/}
                {/*        {selected}*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className={styles["nav__bot_right"]}>
                    <div className={styles.addTag} onClick={addTagClickHandler}>
                        ajouter Etiquette <FontAwesomeIcon icon={faCirclePlus}/>
                    </div>
                    <AddTagModal tags={props.tags} show={showModal} closeModal={setShowModal} showModalHandler={addTagClickHandler}/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
