import WGNavBar from '../navbar/Navbar';
import Form from 'react-bootstrap/Form';
import { Button, Alert, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import './Create.css'

function Create() {
    const [username, setUsername] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const sendPostUrl = 'http://localhost:8787/posts'

    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: {
                'Origin': 'http://localhost:3000/'
            },
            body: JSON.stringify({ username, title, content })
        };
        
        fetch(sendPostUrl, requestOptions)
            .then(async response => {
                const postResponse = await response.json()
                if(postResponse.status === 200) {
                    navigate(`../explore#${postResponse.response.id}`)
                } else {
                    window.alert = `Error code: ${postResponse.status}: ${postResponse.message}`
                }
            })
            .catch(error => console.log('Form submit error', error))
    };

    const handleUserChange = event => setUsername(event.target.value)
    const handleTitleChange = event => setTitle(event.target.value)
    const handleContentChange = event => setContent(event.target.value)

    return (
        <div className="CreatePostDiv">
            <WGNavBar></WGNavBar>
            <Container className="PostForm">
                <p className="ShareText">What do you want to share today?</p>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Control required type="text" placeholder="What's your username?" className="PostTitle" value={username} onChange={handleUserChange} />
                        <Form.Control required type="text" placeholder="Give a 'wanderful' title!" className="PostTitle" value={title} onChange={handleTitleChange} />
                        <Form.Control required as="textarea" type="text" placeholder="Share your travel experience..." className="PostContent" value={content} onChange={handleContentChange} />
                        <div className="PostSubmitButtons">
                            <Button className="PostSubmitButton" type="submit">Post</Button>
                            <Link to="/" className="PostSubmitButton CancelButton">Cancel</Link>
                        </div>
                    </Form.Group>
                </Form>
            </Container>
        </div>
    );
}

export default Create;