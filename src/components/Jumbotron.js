import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
//Jumbotron is no longer available on this version of bootstrap
// I will need to create my own Jumbotron using CSS and add it in that way
import galaxy from '../assets/galaxy.jpg';

const Styles = styled.div`
    .Jumbo {
        z-index: -2;
        background: url(${galaxy}) no-repeat fixed bottom;
        background-size: cover;
        color: white;
        height: 200px;
        position: relative;
    }
`;

export const Jumbotron = ()=> (
    <Styles>
        <div className='Jumbo'>
            <Container>
                <h1>Welcome</h1>
                <p>Enjoy yourself, Starlord</p>
            </Container>
        </div>
    </Styles>
) 
