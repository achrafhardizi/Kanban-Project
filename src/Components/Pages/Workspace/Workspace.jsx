import React, {useState} from 'react';
import {Navbar, Section, Sidebar} from "../../index";
import Task from "../../Tasks/Task";
import styles from './workspace.module.css';
import _sections from "../../../FakeData/DummySection.js"
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Workspace = () => {

    const [sections, setSections] = useState(_sections);

    const newSection = {
        id:6,
        sectionName:"New Section"
    }

    const addSection = (newSection) => {
        setSections((prevSections => [...prevSections,newSection]));
    }

    return (
        <div
            className={styles.page}
        >
            <Sidebar/>
            <div className={styles.body}>
                <Navbar/>
                <div className={styles.layout}>
                    {sections.map((e,i) => (
                        <Section Name={e.sectionName} key={e.id}>
                            {
                                [...Array(3)].map((e,i) =>(
                                    <Task key={i}/>
                                ))
                            }
                        </Section>))
                    }
                    <div className={styles.addSection} onClick={()=>addSection(newSection)}>
                        <span>add Section</span>
                        <FontAwesomeIcon icon={faCirclePlus}/>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Workspace;
