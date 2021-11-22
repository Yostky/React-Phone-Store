import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PaypalButton from './PaypalButton';

export default class CartTotals extends Component {
    render() {
      const {
        cartSubtotal,
        cartTax,
        cartTotal,
        // cart,
        clearCart
      } = this.props.value;
      const { history } = this.props;
    //   const emptyCart = cart.length === 0 ? true : false;

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
                        <PaypalButton total={cartTotal} clearCart={clearCart} history={history}></PaypalButton>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
}