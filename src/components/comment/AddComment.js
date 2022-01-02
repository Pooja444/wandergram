import './AddComment.css'
import Form from 'react-bootstrap/Form';
import { Button, Container, Alert } from 'react-bootstrap'
import React, { useState } from 'react';

function AddComment(props) {
    const [username, setUsername] = useState("")
    const [content, setContent] = useState("")

    const handleContentChange = event => setContent(event.target.value)
    const handleUserChange = event => setUsername(event.target.value)

    const handleSubmit = async event => {
        event.preventDefault();
        const sendCommentUrl = `https://wandergram.explore444.workers.dev/post/${props.postId}/comment`

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Origin': 'http://192.168.0.11:3000/'
            },
            mode: 'no-cors',
            body: JSON.stringify({
                "content": content,
                "username": username
            })
        }

        fetch(sendCommentUrl, requestOptions)
            .then(response => {
                return response
            })
            .then((data) => {
                console.log(data)
                console.log(data ? JSON.parse(data) : {})
            })
            .catch((error) => {
                console.log(error)
            })

        // fetch(sendCommentUrl, requestOptions)
        //     .then(async response => {
        //         const data = await response.json()
        //         console.log(data)
        //         // if(response.status === 200) {
        //         //     let allComments = props.comments
        //         //     if(allComments === undefined) allComments = []
        //         //     allComments.push(response.comment)
        //         //     props.setComments(allComments)
        //         //     props.setVal(props.val + 1)
        //         //     window.alert("Comment added successfully!")
        //         // }
        //     })
        //     .catch(error => console.log('Form submit error', error))
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Control required as="textarea" type="text" placeholder="Write a comment..." className="CommentContent" value={content} onChange={handleContentChange} />
                    <div className="CommentSubmitButtons">
                        <Form.Control type="text" required placeholder="What's your username?" className="CommentSubmit" value={username} onChange={handleUserChange} />
                        <Button className="CommentSubmit CommentSubmitBy" type="submit">Comment</Button>
                    </div>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default AddComment