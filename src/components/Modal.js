import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../assets/context';
import { StyledButton } from './StyledButton';
import { Link } from 'react-router-dom';
import { CloseButton } from 'react-bootstrap';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=> {
                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;
                    if(!modalOpen){
                        return null;
                    } else {
                        return (
                            <ModalContainer>
                            <div className='container'>
                                <div className='row'>
                                    <div id='modal' className='col-8 col-md-6 col-lg-4 text-center text-capitalize mx-auto'>
                                        <CloseButton 
                                            className='closer' 
                                            onClick={()=>{
                                            closeModal();}}>
                                        </CloseButton>
                                        <h3><strong>Item added to the cart</strong></h3>
                                        <img src={img} className='img-fluid' alt='product'/>
                                        <h4>{title}</h4>
                                        <h4 className='text-muted'>price : <strong>${price}</strong></h4>
                                        <Link to='/'>
                                            <StyledButton onClick={()=>{
                                                closeModal();
                                                }}>
                                                Products
                                            </StyledButton>
                                        </Link>
                                        <Link to='/cart'>
                                            <StyledButton onClick={()=>{
                                                closeModal();
                                                }}>
                                                Go to cart
                                            </StyledButton>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0,.3);
    position:fixed;
    display: flex;
    justify-content: center;
    align-items:center;
    #modal{
        background: white;
        border-radius: 10px;
    }
`;