import React from 'react';
import {Card} from "react-bootstrap";
import UnsplashReact, { Base64Uploader, withDefaultProps } from "unsplash-react";


const Photo = () => {
    return (
        <>
            <Card style={{
                padding: "30px",
                height: "86.5vh",
                overflow: "auto"
            }}>
                <Card>
                    <Card.Header>photos</Card.Header>
                    <Card.Body><UnsplashReact accessKey={"UNSPLASH_KEY_FROM_UNSPLASH"} Uploader={withDefaultProps(Base64Uploader, { name: "event[logo]" })}/></Card.Body>
                </Card>
            </Card>
        </>
    );
};

export default Photo;
