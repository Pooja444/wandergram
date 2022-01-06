import { Accordion } from 'react-bootstrap'
import Comment from '../comment/Comment';

import './CommentSection.css'

function CommentSection(props) {

    return (
        <Accordion flush className="CommentsSection collapse show" defaultActiveKey={props.isExpanded}>
            <Accordion.Item eventKey="0">
                <Accordion.Header className="ShowCommentsText">Show all comments...</Accordion.Header>
                <Accordion.Body>
                    {props.comments !== undefined ?
                        props.comments.map(comment => (
                            <Comment comment={comment} key={comment.id}></Comment>
                        )) : <div>Be the first to add a comment!</div>}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default CommentSection