import styles from "./Navbar.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-regular-svg-icons"
import {useRef, useState} from "react";
import classNames from "classnames";
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons";
import {AddTagModal} from "../index";


const Navbar = ({projectName = "Project Name", usersNumber = 23}) => {
    const [clicked, setClicked] = useState(false);
    const [selected, setSelected] = useState("Filter");
    const [showModal, setShowModal] = useState(false);

    const addTagClickHandler = () => {
        setShowModal(!showModal);
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
                <h1 className={styles["nav__title"]}>{projectName}</h1>
                <div className={styles["usersNum"]}>
                    <FontAwesomeIcon icon={faUserCircle}/> / {usersNumber}
                </div>
            </div>
            <div className={styles["nav__bot"]}>
                <div className={styles["select-box"]}>
                    <div className={classNames(styles["options-container"],{[styles["active"]]:clicked})}>
                        <div className={styles["option"]} onClick={optionClickHandler}>
                            <input type="radio" className={styles["radio"]} id="section" name="filter"/>
                            <label htmlFor="section">Section</label>
                        </div>

                        <div className={styles["option"]} onClick={optionClickHandler}>
                            <input type="radio" className={styles["radio"]} id="tag" name="filter"/>
                            <label htmlFor="tag">Tag</label>
                        </div>

                        <div className={styles["option"]} onClick={optionClickHandler}>
                            <input type="radio" className={styles["radio"]} id="state" name="filter"/>
                            <label htmlFor="state">State</label>
                        </div>
                    </div>

                    <div className={styles["selected"]} onClick={selectClickHandler}>
                        {selected}
                    </div>
                </div>
                <div className={styles["nav__bot_right"]}>
                    <div className={styles.addTag} onClick={addTagClickHandler}>
                        add Tag <FontAwesomeIcon icon={faCirclePlus}/>
                    </div>
                    <AddTagModal show={showModal}/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
