import React, { useState, useEffect } from 'react';
import WGNavBar from '../navbar/Navbar';
import Post from '../post/Post'

import './Explore.css'

function Explore() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8787/posts")
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
    }, [])
    if (error) {
        return <span>Error: {error.message}</span>
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
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
    }
}

export default Explore