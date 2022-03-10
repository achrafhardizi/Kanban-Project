import React, {useState} from 'react';
import {Card} from "react-bootstrap";
import UnsplashReact, { Base64Uploader, withDefaultProps } from "unsplash-react";
import axios from "axios";

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
                    <Card.Body><UnsplashReact accessKey={"WxYS4ZB8AICntbHlPdQ5EYSwJ8aNFF2sSdds-l3G1ZU"} defaultSearch={"nature"} applicationName={"unsplash_react"}/></Card.Body>

                </Card>
            </Card>
        </>
    );
};

export default Photo;
