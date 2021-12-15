import React, { Component } from "react";
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../assets/context';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {
    render() {
    return (
        <section>
            <ProductConsumer>
                {value => {
                    const {cart} = value;
                    if(cart.length > 0){
                        return (
                            <React.Fragment>
                                <div className='text-center cartColumns py-4 '><h1 className="largeHeader addedBorder"><strong>Your <span className="blueText">Cart</span></strong></h1></div>
                                <CartColumns></CartColumns>
                                <CartList value={value}/>
                                <CartTotals value={value} history={this.props.history}></CartTotals>
                            </React.Fragment>
                        );
                    } else {
                        return (
                            <EmptyCart/>
                        )
                    }
                }}
            </ProductConsumer>
        </section>
    )
}
}