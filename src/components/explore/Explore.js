import React, { useState, useEffect } from 'react';
import { Modal, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import WGNavBar from '../navbar/Navbar';
import Post from '../post/Post'
import Loading from '../loading/Loading';

import './Explore.css'

function Explore() {

    const [username] = useState(localStorage.getItem("username"))
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://wandergram.explore444.workers.dev/posts", {
            method: 'GET',
            headers: {
                'Origin': 'https://wandergram.pages.dev/'
            }
        })
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setPosts(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

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

    if (error) {
        return <span>Error: {error.message} - please try loading this page again</span>
    } else if (!isLoaded) {
        return (
            <div className="LoadingDiv">
                <Loading></Loading>
            </div>
        )
    } else {
        if (posts.length !== 0) {
            return (
                <div>
                    <WGNavBar></WGNavBar>
                    <div className="AllPosts">
                        {posts.map(post => (
                            <Post post={post} key={post.id}></Post>
                        ))}
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <WGNavBar></WGNavBar>
                    <Container className="NoPosts">
                        <p>No posts created by any users yet. Be the first to create a post!</p>
                    </Container>
                </div>
            )
        }
    }
}

export default Explore