import logo from './logo.jpg'
import React from 'react'
import './navbar.css'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { BsFillBellFill } from 'react-icons/bs'
import PropTypes from 'prop-types'

const theme = {
    hr: {
        backgroundColor: 'grey',
        height: 1,
        width: '85%',
        margin: '0 0 0 12px'
    }
};

const Navibar = ({ logo, notifications }) => {
    return (
        <div className='Navbar'>
            <Navbar expand="lg" style={{
                backgroundImage: 'linear-gradient(to right, #BFCFF4, #78B1F8)',
                height:'70px'
            }} variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#home">Kanban Board</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>Home</Nav.Link>
                            <Nav.Link>Tasks</Nav.Link>
                            <NavDropdown title="Filters" id="filters-dropdown">
                                <NavDropdown.Item href="#tags">Filter by tags</NavDropdown.Item>
                                <NavDropdown.Item href="#names">Filter by name</NavDropdown.Item>
                                <NavDropdown.Item href="#date">Filter by date</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link>
                                <NavDropdown title={<BsFillBellFill />} id="notif-dropdown" style={{marginTop:'8px'}}>
                                    {notifications}
                                </NavDropdown>
                            </Nav.Link>
                            <Nav.Link>
                                <NavDropdown title={
                                    <img className='rounded-circle' src={logo} alt="" style={{ width: '40px' }} />
                                } id="profile-dropdown" drop="start">
                                    <NavDropdown.Item disabled style={{ color: "grey" }}>Username</NavDropdown.Item>
                                    <NavDropdown.Item disabled style={{ fontSize: "13px", marginTop: "-5px" }}>Email</NavDropdown.Item>
                                    <hr
                                        style={theme.hr}
                                    />
                                    <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="#activity">Activity</NavDropdown.Item>
                                    <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>

                                    <hr
                                        style={theme.hr}
                                    />
                                    <NavDropdown.Item href="#LogOut">Log out</NavDropdown.Item>
                                </NavDropdown>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

Navibar.defaultProps = {
    logo: logo
}

export default Navibar