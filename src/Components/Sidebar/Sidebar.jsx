//import useState hook to create menu collapse state
import React, {useState} from "react";

import homeIcon from "../../Assets/home.png"
import settingsIcon from "../../Assets/settings.png"
import appearanceIcon from "../../Assets/appearance.png"
import sessionIcon from "../../Assets/session.png"
import workspaceIcon from "../../Assets/workspace.png"
import notificationIcon from "../../Assets/notification.png"
import backgroundIcon from "../../Assets/background.png"
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
                <Link to='/home'>
                    <img src={homeIcon} className={classNames(styles["row__icon"])}/>
                    <span>Home</span>
                </Link>
            </div>
            <div className={styles.row}>
                <Link to='/workspace'>
                    <img src={workspaceIcon} className={classNames(styles["row__icon"])}/>
                    <span>Workspace</span>
                </Link>
            </div>
            <div className={styles.row}>
                <Link to='/home/sessions'>
                    <img src={sessionIcon} className={classNames(styles["row__icon"])}/>
                    <span>Sessions</span>
                </Link>
            </div>
            <div className={styles.row} onClick={submenuClickHandler}>
                <Link to='#'>
                    <img src={settingsIcon} className={classNames(styles["row__icon"])}/>
                    <span>Settings</span>
                </Link>
                <ul className={classNames(styles["submenu"], {[styles["show"]]: dropped})}>
                    <li className={styles.row}>
                        <Link to='/home/settings/appearance'>
                            <img src={appearanceIcon}
                                 className={classNames(styles["row__icon"])}/>
                            <span>Appearance</span>
                        </Link>
                    </li>
                    <li className={styles.row}>
                        <Link to='/home/settings/notifications'>
                            <img src={notificationIcon}
                                 className={classNames(styles["row__icon"])}/>
                            <span>Notifications</span>
                        </Link>
                    </li>
                    <li className={styles.row}>
                        <Link to='/home/settings/background'>
                            <img src={backgroundIcon}
                                 className={classNames(styles["row__icon"])}/>
                            <span>Background</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.row}>
                <Link to='/home'>
                    <img src={profilIcon} className={classNames(styles["row__icon"])}/>
                    <span>profile</span>
                </Link>
            </div>
        </nav>
    );
};

export default Sidebar;
