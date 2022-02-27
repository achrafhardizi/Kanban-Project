import React from 'react';
import { Button, Card, Tab, Tabs } from "react-bootstrap";
import { Invitation, Sessionact, Addsession } from "./Components";
import { AiOutlinePlus } from "react-icons/ai";
import './Sessions.css'

const Sessions = () => {

    let [showsessions, setshowsessions] = React.useState(true);
    const [showinvites, setshowinvites] = React.useState(false);
    const [showsettings, setshowsettings] = React.useState(false);

    const [modalShow, setModalShow] = React.useState(false);

    const sessions = [
        {
            name: "ses3",
            description: "wa dkhel!"
        },
        {
            name: "ses3",
            description: "wa dkhel!"
        },
        {
            name: "ses3",
            description: "wa dkhel!"
        },
        {
            name: "ses3",
            description: "wa dkhel!"
        },
        {
            name: "ses3",
            description: "wa dkhel!"
        },
        {
            name: "ses3",
            description: "wa dkhel!"
        },
        {
            name: "ses3",
            description: "wa dkhel!"
        },
        {
            name: "ses3",
            description: "wa dkhel!"
        }];

    const invsessions = [
        {
            name: "ses3",
            description: "wa dkhel!",
            members: [1, 2, 3]
        }
    ]

    return (
        <div className='sessions'>
            {/*<Card className='session-sec'>
                <Card.Body>
                    <Tabs defaultActiveKey="sessions" id="uncontrolled-tab-example" className="mb-3">
                        <Tab className='open-sessions' eventKey="sessions" title="Sessions courants">
                            <Sessionact sessions={sessions} />
                        </Tab>
                        <Tab eventKey="invitations" title="Invitation" style={{
                            flex: "1",
                            height: "68vh",
                            overflowY: "scroll",
                            overflow: "auto"
                        }}>
                            <Invitation invsessions={invsessions} />
                        </Tab>
                    </Tabs>
                </Card.Body>
                    </Card>*/}
            
            {showsessions && <Sessionact sessions={sessions} />}
            {showinvites && <Invitation invsessions={invsessions} />}
            
            {/* <Invitation invsessions={invsessions} />*/}
            <div className="btn-layout" style={{
                position: "fixed",
                bottom: "0",
                right: "0",
                margin: "10px"
            }}>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    <AiOutlinePlus />
                </Button>
            </div>

            <Addsession
                show={modalShow}
                onHide={() => setModalShow(false)}
                setsession={sess => console.log(sess)}
            />
        </div>
    );
};

export default Sessions;