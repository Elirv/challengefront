import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {ButtonLogout} from './ButtonLogout'
export const OutNavbarContainer = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>MemePage</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/gifs">Gifs</Nav.Link>
                        <Nav.Link href="/clips">Clips</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                    </Nav>

                    <Navbar bg="dark" expand="lg">
                        <Container fluid>
                            <Form className="d-flex ">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Container>
                    </Navbar>
                    
                    <Nav>
                    <ButtonLogout />
                        <Nav.Link eventKey={2} href="#memes">
                            Hello 
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}