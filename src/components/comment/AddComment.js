import './AddComment.css'
import Form from 'react-bootstrap/Form';
import { Button, Container } from 'react-bootstrap'
import React, { useState } from 'react';

function AddComment(props) {
    const [username] = useState(localStorage.getItem("username"))
    const [content, setContent] = useState("")

    const handleContentChange = event => setContent(event.target.value)

    const handleSubmit = async event => {
        event.preventDefault();
        const sendCommentUrl = `http://localhost:8787/post/${props.postId}/comment`

        const requestOptions = {
            method: 'POST',
            headers: {
                'Origin': 'https://wandergram.pages.dev/'
            },
            body: JSON.stringify({
                "content": content,
                "username": username
            })
        }

        fetch(sendCommentUrl, requestOptions)
            .then(async response => {
                const data = await response.json()
                if(data.status === 200) {
                    let allComments = props.comments
                    if(allComments === undefined) allComments = []
                    allComments.push(data.response)
                    props.setComments(allComments)
                    props.setIsExpanded("0")
                    props.setVal(props.val + 1)
                } else {
                    window.alert("Couldn't add comment, please try again: " + data.message)
                }
            })
            .catch(error => window.alert("Couldn't add comment, please try again: " + error))
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName" className="CommentSubmission">
                    <Form.Control required as="textarea" type="text" placeholder="Write a comment..." className="CommentContent" value={content} onChange={handleContentChange} />
                    <Button className="CommentSubmit" type="submit">
                        <span className="CommentSubmitText">Comment</span>
                    </Button>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default AddComment