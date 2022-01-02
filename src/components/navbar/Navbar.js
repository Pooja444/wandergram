import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

import './Navbar.css'

function WGNavBar() {
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
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default WGNavBar