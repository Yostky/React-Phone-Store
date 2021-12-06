import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

export const NavigationBar = ()=> (
    <Styles>
        <Navbar expand='lg'>
            <Navbar.Brand ><Link to='/'>Code Life</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ms-auto'>
                    <Nav.Item><Link to='/'>Home</Link></Nav.Item>
                    <Nav.Item><Link to='/cart'>Cart</Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
);
    
           
        


const Styles = styled.div`
    .navbar {
        background-color: #222;
        margin-bottom: 0;
        border-radius: 0;
    }
    a, .navbar-brand, .navbar-nav .nav-link{
        color: #bbb;

        &:hover{
            color: white;
        }
    }
    .navbar-nav {
        margin-right: 5rem;
        float: right !important;
    }
    
    a {
        margin-left: 5rem;
    }

`;