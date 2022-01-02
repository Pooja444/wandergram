import './Comment.css'

function Comment(props) {
    if (props.comment !== undefined) {
        return (
            <div>
                <p><b>{props.comment.username} -</b> {props.comment.content}</p>
                <hr />
            </div>
        )
    } else {
        return (
            <div>Be the first to add a comment!</div>
        )
    }
}

export default Comment