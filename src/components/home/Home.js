import './Home.css'
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';

function Home() {

    const [username, setUsername] = useState(localStorage.getItem("username") || "")

    useEffect(() => {
        localStorage.setItem("username", username)
    }, [username])

    const checkUsername = event => {
        if(username === undefined || username === null || username.trim() === "") {
            window.alert("Please enter a username before creating/exploring all posts!")
            event.preventDefault()
        }
    }

    const handlerUsernameChange = event => setUsername(event.target.value)

    return (
        <div>
            <header className="Home-background">
                <div className="Welcome">WanderGram</div>
                <div className="Tagline">Eat. Sleep. Travel. Repeat.</div>
                <div className="Description">A social media website where you can share and read travel stories. Start exploring the world at your fingertips!</div>
                <Form className="UsernameForm">
                    <Form.Group controlId="formName">
                        <Form.Control type="text" placeholder="Before you start, enter your username!" className="UsernameInput" value={username} onChange={handlerUsernameChange}/>
                    </Form.Group>
                </Form>
                <div className="ActionButtons">
                    <Link to="/create" className="PostActionButton" onClick={checkUsername}>Create a new Post</Link>
                    <Link to="/explore" className="PostActionButton RightAction" onClick={checkUsername}>Start exploring all posts</Link>
                </div>
            </header>
        </div>
    )
}

export default Home