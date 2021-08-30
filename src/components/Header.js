import React from "react";
import "./Header.css";
import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Navbar bg="myBlue" expand="lg" collapseOnSelect>
                <Navbar.Brand href="#home">Bd-Ponno</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/bookmarks">
                            <i className="fas fa-shopping-cart fa-lg fa-color"></i>
                            &nbsp; Bookmarks
                        </Nav.Link>
                        <Nav.Link href="/signin">
                            <i className="fas fa-user fa-lg fa-color"></i>
                            &nbsp;Sign In
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default Header;
