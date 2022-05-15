import styles from "./Navbar.module.css"
const Navbar = ({projectName="Project Name",usersNumber}) => {
    return (
        <div className={styles.navbar}>
            <div className={styles["nav__top"]}>
                <h1 className={styles["nav__title"]}>{projectName}</h1>
                <div className={styles["usersNum"]}>
                    icon / {usersNumber}
                </div>
            </div>
            <div className={styles["nav__bot"]}>

            </div>
        </div>
    );
};

export default Navbar;
