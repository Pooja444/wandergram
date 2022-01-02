import './Post.css'
import { Card, Accordion } from 'react-bootstrap'
import "bootstrap-icons/font/bootstrap-icons.css";
import Comment from '../comment/Comment';
import AddComment from '../comment/AddComment';
import React, { useState } from 'react';

function Post(props) {
    const [comments, setComments] = useState(props.post.comments)
    const [postId] = useState(props.post.id)
    const [val, setVal] = useState(0)
    
    return (
        <div className="CardMain" id={postId}>
            <Card className="CardContainer">
                <Card.Header className="Header">
                    {props.post.title}
                    <i><span className="User">~ {props.post.username}</span></i>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {props.post.content}
                    </Card.Text>
                    <div>
                        <i className="bi bi-arrow-up-circle UpVote"></i>
                        <i className="bi bi-arrow-down-circle DownVote"></i>
                    </div>
                    <Accordion flush className="CommentsSection">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="ShowCommentsText">Show all comments...</Accordion.Header>
                            <Accordion.Body>
                                {comments !== undefined ?
                                    comments.map(comment => (
                                        <Comment comment={comment} key={comment.id}></Comment>
                                    )) : <div>Be the first to add a comment!</div>}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Card.Body>
                <Card.Footer>
                    <AddComment postId={postId} setComments={setComments} comments={comments} val={val} setVal={setVal}></AddComment>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default Post