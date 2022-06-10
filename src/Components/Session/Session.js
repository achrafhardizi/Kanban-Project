import styles from './Session.module.css';
import {BsDoorOpen,BsThreeDotsVertical} from "react-icons/bs"
import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import {EditSessionModal} from "../index";

const Session = (props,{owned}) => {

    const [showEditSessionModal, setShowEditSessionModal] = useState(false);

    const editSessionClickHandler = () => {
        setShowEditSessionModal(!showEditSessionModal);
    }

    const  colorIsbright = (color) => {

        color = color.substring(1);
        let rgb = parseInt(color, 16),
            red = (rgb >> 16) & 0xff,
            green = (rgb >>  8) & 0xff,
            blue = (rgb >>  0) & 0xff;

        let luma = (red + green + blue)/3;

        if (luma < 128) {
            return "var(--bg-white-light)";
        }
        return "var(--bg-black-dark)"
    }

    return (
        <div className={styles.card} style={{backgroundColor:props.session.bgColor}}>
            <div className={styles["session__header"]}>
                <span
                    className={styles["session_name"]}
                    style={{color:colorIsbright(props.session.bgColor)}}
                >
                    {props.session.nameSession}
                </span>
                <BsThreeDotsVertical style={{color:colorIsbright(props.session.bgColor), cursor: 'pointer'}} onClick={editSessionClickHandler}/>
                <EditSessionModal show={showEditSessionModal} user={props.user} session={props.session}/>
            </div>
            <div className={styles["session__join"]}>
                {owned ? <span className={styles["prop"]}>{"propriétaire"}</span> :<span className={styles["member"]}>{"membre"}</span>}
            </div>
            <Link className={styles["session__enter"]} to={`workspace${props.session.idSession}`}><BsDoorOpen style={{color:props.session.bgColor}}/></Link>
        </div>
    );
};

export default Session;
