import logo from './logo.jpg'
import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { BsFillBellFill } from 'react-icons/bs'
import PropTypes from 'prop-types'

const Navibar = ({ logo, notifications }) => {
    return (
        <div className='Navbar'>
            <Navbar expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#home">Kanban Board</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="">Home</Nav.Link>
                            <Nav.Link href="">Tasks</Nav.Link>
                            <NavDropdown title="Filters" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#tags">Filter by tags</NavDropdown.Item>
                                <NavDropdown.Item href="#names">Filter by name</NavDropdown.Item>
                                <NavDropdown.Item href="#date">Filter by date</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link>
                                <NavDropdown title={<BsFillBellFill />} id="nav-dropdown">
                                    {notifications}
                                </NavDropdown>
                            </Nav.Link>
                            <Nav.Link href="">
                                <img className='rounded-circle' src={logo} alt="" style={{ width: '40px' }} />
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