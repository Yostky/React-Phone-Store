import React from 'react';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../assets/context';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default function Cart() {
    return (
        <section>
            <ProductConsumer>
                {value => {
                    const {cart} = value;
                    if(cart.length > 0){
                        return (
                            <React.Fragment>
                                <div className='text-center'>Title</div>
                                <CartColumns></CartColumns>
                                <CartList value={value}/>
                                <CartTotals value={value}></CartTotals>
                            </React.Fragment>
                        );
                    } else {
                        return (
                            <EmptyCart></EmptyCart>
                        )
                    }
                }}
            </ProductConsumer>
        </section>
    )
}
