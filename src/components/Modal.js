import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../assets/context';
import { StyledButton } from './StyledButton';
import { Link } from 'react-router-dom';

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
                                        <h5>Item added to the cart</h5>
                                        <img src={img} className='img-fluid' alt='product'/>
                                        <h5>{title}</h5>
                                        <h5 className='text-muted'>price : ${price}</h5>
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
    justify-conent: center;
    align-items:center;
    #modal{
        background: white;
    }
`;