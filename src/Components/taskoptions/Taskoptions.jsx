import React from 'react'
import { useState } from 'react'
import './taskoptions.css'
import { ListGroup, Button, Modal, Tabs, Tab } from 'react-bootstrap'
import { ChromePicker } from 'react-color'

const Taskoptions = ({tags=['important', 'another tag', 'etccc'], Name='testing name'}) => {

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [color, setColor] = useState('#fff');

    return (
        (show && <Modal size="lg" centered show={handleShow} onHide={handleClose}>
            <Modal.Body>
                <Tabs defaultActiveKey="task-info" >
                    <Tab eventKey="task-info" title="Information" style={{rowGap:'10px'}}>
                        <label htmlFor="" contentEditable>{Name}</label>
                        <ListGroup horizontal>
                            {tags.map(tag => {
                                return <ListGroup.Item>{tag}</ListGroup.Item>
                            })}
                        </ListGroup>
                        <label htmlFor="desc">Description : </label><br /><textarea name="Add description here" placeholder='Enter a description here.' id="desc" cols="30" rows="10"></textarea> <br />
                        Attachements
                    </Tab>
                    <Tab eventKey="task-appearance" title="Appearance">
                        Color
                        Background
                        Border
                        <ChromePicker color={color} onChange={updatedColor => setColor(updatedColor.rgb)} />
                    </Tab>
                    <Tab eventKey="task-security" title="Security">
                        Let's put here the visibility depending on the tag for example, there are tasks only the managers can see etc.. <br />
                        <Button variant="danger" onClick={" "/*need to make a function to delete task */}>
                            Remove task
                        </Button>
                    </Tab>
                </Tabs >
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>)
    )
}

export default Taskoptions

/*
Thinking about using modals directly to show the task settings instead of making buttons

<ButtonGroup vertical className='toptions'>
            <Button className='btnname'>Edit name</Button>
            <Button className='btntags'>Edit tags</Button>
            <Button className='btndates'>Edit dates</Button>
            <Button className='btncolor'>Change color</Button>
            <Button className='btnremove'>Remove</Button>
        </ButtonGroup>

<Modal centered show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Modal body text</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
*/