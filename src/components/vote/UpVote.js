import './UpVote.css'

import { useState } from 'react';

function Vote(props) {

    const [username] = useState(localStorage.getItem("username"))

    let upVoted = false
    if (props.votes !== undefined && props.votes !== null && props.votes.length !== 0) {
        props.votes.forEach(vote => {
            if (vote.username === username && vote.type === "upvote") upVoted = true
        });
    }

    const handleVote = event => {
        event.preventDefault();

        const voteUrl = `http://localhost:8787/post/${props.postId}/vote`
        const voteBody = {
            "username": username,
            "type": "upvote"
        }

        const requestOptions = {
            method: 'POST',
            headers: {
                'Origin': 'https://wandergram.pages.dev/'
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

    if (upVoted) return (
        <span>
            <i className="bi bi-arrow-up-circle-fill UpVote" onClick={handleVote}></i>
            <span className="UpVotesNumber">{
                (props.votes === undefined || props.votes === null || props.votes.length === 0) ? 0
                    : props.votes.filter(vote => vote.type === "upvote").length
            }</span>
        </span>
    )
    else return (
        <span>
            <i className="bi bi-arrow-up-circle UpVote" onClick={handleVote}></i>
            <span className="UpVotesNumber">{
                (props.votes === undefined || props.votes === null || props.votes.length === 0) ? 0
                    : props.votes.filter(vote => vote.type === "upvote").length
            }</span>
        </span>
    )
}

export default Vote