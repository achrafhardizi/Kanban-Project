import styles from './Session.module.css';
import {BsDoorOpen,BsThreeDotsVertical} from "react-icons/bs"
import {Link} from "react-router-dom";

const Session = (props) => {

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
        <div className={styles.card} style={{backgroundColor:props.session.sessionColor}}>
            <div className={styles["session__header"]}>
                <span
                    className={styles["session_name"]}
                    style={{color:colorIsbright(props.session.sessionColor)}}
                >
                    {props.session.sessionName}
                </span>
                <BsThreeDotsVertical style={{color:colorIsbright(props.session.sessionColor)}}/>
            </div>
            <div className={styles["session__join"]}>
                <span>{"joined"}</span>
            </div>
            <Link className={styles["session__enter"]} to={`workspace${props.session.sessionId}`}><BsDoorOpen style={{color:props.session.sessionColor}}/></Link>
        </div>
    );
};

export default Session;
