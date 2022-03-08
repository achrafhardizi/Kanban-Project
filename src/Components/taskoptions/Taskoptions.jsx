import React from 'react'
import { useState } from 'react'
import './taskoptions.css'
import { Card, Button, Modal, Tabs, Tab, Form, FloatingLabel } from 'react-bootstrap'
import { ChromePicker } from 'react-color'
import { AiOutlineCreditCard, AiOutlineTags, AiOutlineFileText, AiOutlinePlus, AiOutlinePaperClip } from 'react-icons/ai'

const Taskoptions = ({ tags = ['important', 'another tag', 'etccc'], Name = 'testing name' }) => {

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [color, setColor] = useState('#fff');
    const changecolor = (updatedColor) => {
        setColor(updatedColor.rgb);
        console.log(updatedColor.rgb);
        document.getElementById('bgpreview').style.backgroundColor = `rgba(${updatedColor.rgb.r}, ${updatedColor.rgb.g}, ${updatedColor.rgb.b}, ${updatedColor.rgb.a})`;
    }

    return (
        (show && <Modal size="lg" centered show={handleShow} onHide={handleClose}>
            <Modal.Body>
                <Tabs defaultActiveKey="task-info" >
                    <Tab eventKey="task-info" title="Information" >
                        <label htmlFor=""><AiOutlineCreditCard size={30}/></label><label className="m-1" htmlFor="" contentEditable> {Name}</label>
                        <Form className='d-flex' style={{marginTop:'10px'}}>
                            <label htmlFor=""><AiOutlineTags size={30} /></label>
                            {tags.map(tag => {
                                return <Button className="me-1 btn-sm" variant="primary">{tag}</Button>
                            })}
                            <Button className='btn-sm'> <AiOutlinePlus/> </Button>
                        </Form>

                        <Form className='d-flex' style={{marginTop:'10px'}}>
                            <label htmlFor=""><AiOutlineFileText size={30}/></label>
                            <FloatingLabel controlId="floatingTextarea2" label="Description" >

                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a description here"
                                    style={{ height: '100px', width: '300px' }}
                                />
                            </FloatingLabel>
                        </Form>

                        <Form style={{marginTop:'10px'}}>
                            <label htmlFor=""><AiOutlinePaperClip size={30}/>Attachement</label> <br />
                            <Button className='btn-sm' style={{marginLeft:'30px'}}> <AiOutlinePlus /> </Button>
                        </Form>

                    </Tab>
                    <Tab eventKey="task-appearance" title="Appearance">
                        <ChromePicker className='mt-2' color={color} onChange={changecolor} />
                        <label className='mt-2' htmlFor="bgpreview">Preview : </label><Card id='bgpreview' style={{marginTop:'10px', width:'100px', height:'100px'}}></Card>
                    </Tab>
                    <Tab eventKey="task-security" title="Visibility">
                        We can limit the visibility of tasks depending on the members here
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