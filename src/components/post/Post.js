import './Post.css'
import React, { useState } from 'react';

import { Card } from 'react-bootstrap'
import "bootstrap-icons/font/bootstrap-icons.css";

import AddComment from '../comment/AddComment';
import UpVote from '../vote/UpVote'
import DownVote from '../vote/DownVote'
import CommentSection from '../comment/CommentSection';

function Post(props) {
    const [comments, setComments] = useState(props.post.comments)
    const [isExpanded, setIsExpanded] = useState("1") // State 1 = false, state 0 = true
    const [postId] = useState(props.post.id)
    const [val, setVal] = useState(0)
    const [votes, setVotes] = useState(props.post.votes)
    const [commentPostId] = useState(`comment-${postId}`)
    
    return (
        <div className="CardMain" id={postId}>
            <Card className="CardContainer">
                <Card.Header className="Header">
                    {props.post.title}
                    <i><span className="User">~ {props.post.username}</span></i>
                    <span className="float-end PostDateTime">at {props.post.datetime}</span>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {props.post.content}
                    </Card.Text>
                    <div>
                        <UpVote postId={postId} votes={votes} setVotes={setVotes}></UpVote>
                        <DownVote postId={postId} votes={votes} setVotes={setVotes}></DownVote>
                    </div>
                    <CommentSection comments={comments} key={commentPostId} isExpanded={isExpanded}></CommentSection>
                </Card.Body>
                <Card.Footer>
                    <AddComment postId={postId} setComments={setComments} comments={comments} val={val} setVal={setVal} setIsExpanded={setIsExpanded}></AddComment>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default Post