import React from 'react';
import { Link } from 'react-router-dom';

export default function CartTotals({value}) {
    const {cartSubtotal, cartTax, cartTotal, clearCart} = value;

    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-10 mt-2 ms-sm-5 ms-md-auto col-sm-8 text-capitalize text-right'> 
                        <Link to='/'>
                            <button className='btn btn-outline-danger text-uppercase mb-3 px-5' 
                            type='button' 
                            style={{border: '1px solid red'}}
                            onClick={()=>clearCart()}>
                                Clear cart
                            </button>
                        </Link>
                        <h5>
                            <span>subtotal : </span>
                            <strong>$ {cartSubtotal}</strong>
                        </h5>
                        <h5>
                            <span>tax : </span>
                            <strong>$ {cartTax}</strong>
                        </h5>
                        <h5>
                            <span>Total : </span>
                            <strong>$ {cartTotal}</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
