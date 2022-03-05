import React, {useState} from 'react';
import {Card, Form, ListGroup} from "react-bootstrap";

const theme = {
    themee:{
        marginBottom: "5px",
        border: "1px solid lightgrey",
        borderRadius: "2px"
    },
    selected:{
        backgroundColor: "lightblue"
    }
}

const select = () => {

}

const Appearance = () => {
    const [dark, setDark] = useState(false);
    /*const [dark, setDark] = useState(false);
    const [light, setLight] = useState(false);*/

    /*const handleClick = (type) => {
        if(type==="dark"){
            setDark(true);
            setLight(false);
        }else{
            setLight(true);
            setDark(false);
        }
    }*/

    return (
        <>
            <Card style={{
                padding: "30px",
                height: "86.5vh",
                overflow: "auto"
            }}>
                <Card>
                <Card.Header>Theme</Card.Header>
                   <Form>
                    <Card.Body><ListGroup id={"grp"}>
                        <ListGroup.Item style={theme.themee} onClick={() => setDark(!dark)}>
                            <Form.Check checked={dark} type={"checkbox"} label={"Dark"} />
                        </ListGroup.Item>
                        <ListGroup.Item style={theme.themee} onClick={() => setDark(!dark)}>
                            <Form.Check checked={!dark} type={"checkbox"} label={"Light"} />
                        </ListGroup.Item>
                    </ListGroup></Card.Body>
                   </Form>
                </Card>

            </Card>
        </>
    );
};

export default Appearance;
