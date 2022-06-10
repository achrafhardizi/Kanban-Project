import React from 'react';
import style from "./Loader.module.css"

const Loader = () => {
    return (
        <div className={style["page"]}>
            <div className={style["loader"]}>
                <span style={{["--i"]: 6}}/>
                <span style={{["--i"]: 7}}/>
                <span style={{["--i"]: 8}}/>
                <span style={{["--i"]: 9}}/>
                <span style={{["--i"]: 10}}/>
                <span style={{["--i"]: 11}}/>
                <span style={{["--i"]: 12}}/>
                <span style={{["--i"]: 13}}/>
                <span style={{["--i"]: 14}}/>
                <span style={{["--i"]: 15}}/>
                <span style={{["--i"]: 16}}/>
                <span style={{["--i"]: 17}}/>
                <span style={{["--i"]: 18}}/>
                <span style={{["--i"]: 19}}/>
                <span style={{["--i"]: 20}}/>
            </div>
        </div>
    );
};

export default Loader;
