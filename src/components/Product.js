import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { ProductConsumer } from '../assets/context';
import galaxy from '../assets/galaxy.jpg';
import {StyledButton } from './StyledButton';

export default class Product extends Component {
    render() {

    const {id, img, title, price, inCart} = this.props.product;

        return (
            <ProductWrapper className='col-9 col-md-6 col-lg-3 mx-auto mb-5'>
                <div className='card'>
                    <ProductConsumer>
                        {value => (
                            <div className='img-container pt-3'
                                onClick={()=> value.openDetail(id)}>
                                <Link to='/details'>
                                    <div className="lead text-center">{title}</div>
                                    <img src={img} alt='product' className='card-img-top pb-1' style={{height:"25rem",width:"100%"}}></img>
                                </Link>
                                <div className='d-flex px-5 justify-content-around align-items-center card-footer mb-0'>
                                    <div className='fs-1'><strong>${price}</strong></div>
                                    <StyledButton 
                                        onClick={ ()=> {
                                            value.addToCart(id)
                                            value.openModal(id)
                                        }
                                    } 
                                        >
                                        {inCart ? (<p className="text-capitalize mb-0">in cart</p>) : <BsFillCartPlusFill className='cartIcon'/>}
                                    </StyledButton>
                                </div>
                            </div>
                        )}
                    </ProductConsumer>
                </div>
            </ProductWrapper>
        )
    }
}


const ProductWrapper = styled.div`
    .cartIcon{
        font-size: 2.5rem;
    }
    .card-footer{
        z-index: 2;
    }
    .card{
        transition: all .25s linear;
        border: 2px solid #acacac;
        box-shadow: 10px 10px 5px grey;
    }
    &:hover{
        .card{
            border: 2px solid #00bfff;
        }
    }
    .img-container{
        position: relative;
        overflow: hidden;
    }
    .card-img-top{
        transition: .25s all linear;
        margin-bottom: 15px;
    }
    .img-container:hover .card-img-top{
        transform: scale(1.1)
    }
`
