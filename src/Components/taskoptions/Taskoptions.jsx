import React from 'react'
import './taskoptions.css'
import { ButtonGroup, Button } from 'react-bootstrap'

const Taskoptions = () => {
    return (
        <ButtonGroup vertical className='toptions'>
            <Button className='btnname'>Edit name</Button>
            <Button className='btntags'>Edit tags</Button>
            <Button className='btndates'>Edit dates</Button>
            <Button className='btncolor'>Change color</Button>
            <Button className='btnremove'>Remove</Button>
        </ButtonGroup>

    )
}

export default Taskoptions