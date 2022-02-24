import React from 'react'
import './usersettings.css'
import logo from './logo.jpg'
import { Card, Row, Col } from 'react-bootstrap'

const Usersettings = () => {
  return (
    <Card className='usersettings'>
      <Card.Header>Account</Card.Header>
      <Card.Title>
        Username
        <Card.Text>email</Card.Text>
      </Card.Title>
      <Card.Body>
        <Col>
          <Row>
            <Card.Link href="#">Profile</Card.Link>
          </Row>
          <Row>
            <Card.Link href="#">Activity</Card.Link>
          </Row>
          <Row>
            <Card.Link href="#">Settings</Card.Link>
          </Row>
          <Row>
            <Card.Link href="#">Log out</Card.Link>
          </Row>
        </Col>
      </Card.Body>

    </Card>
  )
}

export default Usersettings