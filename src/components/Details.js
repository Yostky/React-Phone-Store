import React, { Component } from 'react';
import { ProductConsumer } from '../assets/context';
import { Link } from 'react-router-dom';
import {StyledButton } from './StyledButton';
// import styled from 'styled-components';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id, company, img, info, price, title, inCart} = value.detailProduct;
                    return (
                        <div className='container py-5'>
                            <div className='row'>
                                <div className='text-primary mx-auto  my-5 col-10 text-center'>
                                    <h1>{title}</h1>
                                </div>
                            </div>    
                            <div className='row'>
                                <div className='col-10 col-md-6 my-2 mx-auto'>
                                    <img src={img} alt="phone" style={{height:"30rem",width:"30rem"}}/>
                                    <h2 >Made By: <span className='text-uppercase'>{company}</span></h2>
                                    <h3 className='text-primary'>${price}</h3>
                                    <p>{info}</p>
                                    <div className='d-flex justify-content-left'>
                                        <Link to='/'><StyledButton>Back to home</StyledButton></Link>
                                        <StyledButton 
                                        detailCartBTN
                                        onClick={()=> {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}>{inCart ? 'In Cart' : 'add to cart'}</StyledButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}

// const StyledImg = styled.img `
//     width: inherit;
//     height: inherit;
//     object-fit: contain;
// `;