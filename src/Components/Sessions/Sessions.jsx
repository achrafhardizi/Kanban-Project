import React from 'react';
import {Button, Card, Tab, Tabs} from "react-bootstrap";
import {Invitation, Sessionact, Addsession} from "./Components";
import {AiOutlinePlus} from "react-icons/ai";


const Sessions = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const sessions = [
        {
            name: "Session",
            description: "description"
        },
        {
            name: "Session",
            description: "description"
        },
        {
            name: "Session",
            description: "description"
        },
        {
            name: "Session",
            description: "description"
        },
        {
            name: "Session",
            description: "description"
        },
        {
            name: "Session",
            description: "description"
        }];

    const invsessions = [
        {
            name: "ses3",
            description: "description",
            members: [1, 2, 3]
        }
    ]


    return (
        <React.Fragment>
            <Card style={{
                margin: '20px 20px 210px 210px',
                padding: "0",
                display: "flex",
                flexDirection: "row",
                height: "80vh",
                minWidth: "565.60px"
            }}>
                <Card.Body>
                    <Tabs defaultActiveKey="sessions" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="sessions" title="Sessions courants" style={{
                            flex: "1",
                            height: "68vh",
                            overflowY: "scroll",
                            overflow: "auto"
                        }}>
                            <Sessionact sessions={sessions}/>
                        </Tab>
                        <Tab eventKey="invitations" title="Invitation" style={{
                            flex: "1",
                            height: "68vh",
                            overflowY: "scroll",
                            overflow: "auto"
                        }}>
                            <Invitation invsessions={invsessions}/>
                        </Tab>
                    </Tabs>
                </Card.Body>
            </Card>
            <div className="btn-layout" style={{
                position: "fixed",
                bottom: "0",
                right: "0",
                margin: "10px"
            }}>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    <AiOutlinePlus/>
                </Button>
            </div>

            <Addsession
                show={modalShow}
                onHide={() => setModalShow(false)}
                setsession={sess => console.log(sess)}
            />
        </React.Fragment>
    );
};

export default Sessions;