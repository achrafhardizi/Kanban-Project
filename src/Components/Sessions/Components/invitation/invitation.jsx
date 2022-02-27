import React from 'react';
import {Button, Card} from "react-bootstrap";
import {TiTickOutline, TiTimesOutline} from "react-icons/ti";

const Invitation = ({invsessions}) => {
    return (
        <React.Fragment>
            {invsessions.map(ses => {
                return (
                    <Card>
                        <Card.Header style={{display: "flex"}}>
                            {ses.name}<div className="buttons" style={{
                            float: "right",
                            marginRight: "0",
                            marginLeft:"auto",
                            display:"block"
                        }}>
                            <Button variant="success" style={{marginRight: "3px"}}><TiTickOutline/></Button>
                            <Button variant="danger"><TiTimesOutline/></Button>
                        </div></Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {"Vous étes invités par user flan flan pour joindre la session"}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )})
            }
        </React.Fragment>
    );
};

export default Invitation;
