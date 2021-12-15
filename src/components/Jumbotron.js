import React from 'react';
import styled from 'styled-components';
//Jumbotron is no longer available on this version of bootstrap
// I will need to create my own Jumbotron using CSS and add it in that way
import coverPhoto from '../assets/coverPhoto.jpg';

const Styles = styled.div`
    .Jumbo {
        z-index: -2;
        background: url(${coverPhoto}) no-repeat fixed bottom;
        background-image:
        linear-gradient(to bottom, rgba(119,118,150, 0.52), rgba(0,0,0, 0.73)),url(${coverPhoto});
        background-size: cover;
        color: white;
        height: 600px;
        position: absolute;
        right: 0;
        left: 0;
        top: 10;
        width: 100%;
        
    }
    
`;

export const Jumbotron = ()=> (
    <Styles>
        <div className='Jumbo'>
        </div>
    </Styles>
) 
