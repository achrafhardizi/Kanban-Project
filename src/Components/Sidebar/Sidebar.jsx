//import useState hook to create menu collapse state
import React, {useState} from "react";

import homeIcon from "../../Assets/home.png"
import settingsIcon from "../../Assets/settings.png"
import appearanceIcon from "../../Assets/appearance.png"
import notificationIcon from "../../Assets/notification.png"
import profilIcon from "../../Assets/profile.png"

import styles from "./Sidebar.module.css";
import {Link} from "react-router-dom";
import classNames from "classnames";


const Sidebar = (color) => {
    const [dropped, setDropped] = useState(false);

    const submenuClickHandler = () => {
        setDropped(!dropped);
    }

    return (
        <nav className={styles.sidebar}>
            <div className={styles.row}>
                <Link to='/sessions'>
                    <img src={homeIcon} className={classNames(styles["row__icon"])}/>
                    <span>Sessions</span>
                </Link>
            </div>
            {/*<div className={styles.row} onClick={submenuClickHandler}>*/}
            {/*    <Link to='#'>*/}
            {/*        <img src={settingsIcon} className={classNames(styles["row__icon"])}/>*/}
            {/*        <span>Réglages</span>*/}
            {/*    </Link>*/}
            {/*    <ul className={classNames(styles["submenu"], {[styles["show"]]: dropped})}>*/}
            {/*        <li className={styles.row}>*/}
            {/*            <Link to='/sessions/settings/appearance'>*/}
            {/*                <img src={appearanceIcon}*/}
            {/*                     className={classNames(styles["row__icon"])}/>*/}
            {/*                <span>Apparence</span>*/}
            {/*            </Link>*/}
            {/*        </li>*/}
            {/*        <li className={styles.row}>*/}
            {/*            <Link to='/sessions/settings/notifications'>*/}
            {/*                <img src={notificationIcon}*/}
            {/*                     className={classNames(styles["row__icon"])}/>*/}
            {/*                <span>Notifications</span>*/}
            {/*            </Link>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
            <div className={styles.row}>
                <Link to='/profile'>
                    <img src={profilIcon} className={classNames(styles["row__icon"])}/>
                    <span>profile</span>
                </Link>
            </div>
        </nav>
    );
};

export default Sidebar;
