import React from 'react'
import { Sessions, Sidebar } from '../..'
import { Row, Col } from 'react-bootstrap'

const Home = () => {
    return (
        <Row>
            <Col lg={2}><Sidebar /></Col>
            <Col lg={10}><Sessions /></Col>
        </Row>
    )
}

export default Home