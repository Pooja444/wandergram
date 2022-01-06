import WGNavBar from '../navbar/Navbar';
import { Button, Container, Form, Modal } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import './Create.css'

function Create() {

    const [username] = useState(localStorage.getItem("username"))
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const navigate = useNavigate();

    if (username === null || username === undefined || username.trim() === "") {
        return (
            <Modal.Dialog>
                <Modal.Body>
                    <p>No username entered before creating/exploring posts. This should not happen, please go to home and enter one!</p>
                </Modal.Body>
                <Modal.Footer>
                    <Link to="/" className="HomeButton">Home</Link>
                </Modal.Footer>
            </Modal.Dialog>
        )
    }
    const sendPostUrl = 'http://localhost:8787/posts'

    const handleSubmit = event => {
        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: {
                'Origin': 'https://wandergram.pages.dev/'
            },
            body: JSON.stringify({ username, title, content })
        };

        fetch(sendPostUrl, requestOptions)
            .then(async response => {
                const postResponse = await response.json()
                if (postResponse.status === 200) {
                    navigate(`../explore#${postResponse.response.id}`)
                } else {
                    window.alert = `Error code: ${postResponse.status}: ${postResponse.message}`
                }
            })
            .catch(error => window.alert = `Something went wrong: ${error}`)
    };

    const handleTitleChange = event => setTitle(event.target.value)
    const handleContentChange = event => setContent(event.target.value)

    return (
        <div className="CreatePostDiv">
            <WGNavBar></WGNavBar>
            <Container className="PostForm">
                <p className="ShareText">What do you want to share today?</p>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
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