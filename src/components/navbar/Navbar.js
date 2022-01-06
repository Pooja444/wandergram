import { useState } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

import "bootstrap-icons/font/bootstrap-icons.css";
import './Navbar.css'

function WGNavBar() {

    const [username] = useState(localStorage.getItem("username"))

    return (
        <Navbar expand="lg" fixed="top" className="WGNavBar">
            <Container>
                <Navbar.Brand className="WGBrand">
                    <Link to="/" className="NavBarItem">Wandergram</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className="NavBarItem">Home</Link>
                        <Link to="/create" className="NavBarItem">Create Post</Link>
                        <Link to="/explore" className="NavBarItem">Explore Posts</Link>
                    </Nav>
                    <Nav className="ml-auto">Welcome {username}!</Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default WGNavBar