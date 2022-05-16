import styles from './Tag.module.css';

const Tag = ({tagName="important",tagColor="#1fc778"}) => {
    return (
        <div className={styles.tag} style={{backgroundColor:tagColor}}>
            {tagName}
        </div>
    );
};

export default Tag;
