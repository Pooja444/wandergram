import './DownVote.css'

import { useState } from 'react';

function DownVote(props) {

    const [username] = useState(localStorage.getItem("username"))

    let downVoted = false
    if (props.votes !== undefined && props.votes !== null && props.votes.length !== 0) {
        props.votes.forEach(vote => {
            if (vote.username === username && vote.type === "downvote") downVoted = true
        });
    }

    const handleDownVote = event => {
        event.preventDefault();

        const voteUrl = `https://wandergram.explore444.workers.dev/post/${props.postId}/vote`
        const voteBody = {
            "username": username,
            "type": "downvote"
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Origin': 'https://wandergram.pages.dev'
            },
            body: JSON.stringify(voteBody)
        }

        fetch(voteUrl, requestOptions)
            .then(async response => {
                const data = await response.json()
                if (data.status === 200) {
                    const post = data.response
                    if (post !== undefined) {
                        props.setVotes(post.votes)
                    } else {
                        window.alert("Couldn't find post to upvote, please try again: " + data.message)
                    }
                } else {
                    window.alert("Couldn't upvote, please try again: " + data.message)
                }
            })
            .catch(error => window.alert("Couldn't upvote, please try again: " + error))

    }

    if(downVoted) return (
        <span>
            <i className="bi bi-arrow-down-circle-fill DownVote" onClick={handleDownVote}></i>
            <span className="DownVotesNumber">{
                (props.votes === undefined || props.votes === null || props.votes.length === 0) ? 0
                    : props.votes.filter(vote => vote.type === "downvote").length
            }</span>
        </span>
    )
    else return (
        <span>
            <i className="bi bi-arrow-down-circle DownVote" onClick={handleDownVote}></i>
            <span className="DownVotesNumber">{
                (props.votes === undefined || props.votes === null || props.votes.length === 0) ? 0
                    : props.votes.filter(vote => vote.type === "downvote").length
            }</span>
        </span>
    )
}

export default DownVote