import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../App.css';
// Import icon
import { Icon } from '@iconify/react';
import logoApple from '@iconify/icons-ion/logo-apple';

class NavBar extends Component {
    state = { isOpen: false };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return(
            <div>
                <Navbar color="light" dark expand="sm" className="mb-5 nav" sticky="top">
                    <Container>
                        <NavbarBrand className="navBrand" style={{color: "darkgray", fontSize: "29px"}}>
                        <Icon className="navIcon" icon={logoApple} />iTunes Search</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto nav-links" navbar>
                                <NavItem style={{marginRight: '15px'}}>
                                    <Link className="favourite-nav" to="/"
                                    style={{color: 'darkgray'}}>
                                        Home
                                    </Link>
                                </NavItem>
                                <NavItem style={{marginLeft: '15px'}}>
                                    <Link className="favourite-nav" to="/favourites"
                                    style={{color: 'darkgray'}}>
                                        Favourites
                                    </Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
        </Navbar>
            </div>
        );
    }
}

export default NavBar;
