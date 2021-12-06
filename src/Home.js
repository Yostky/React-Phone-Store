import React from 'react'
import { ProductConsumer } from './assets/context';
import Product from './components/Product'


export default function Home() {
    return (
        <React.Fragment>
            <div className='py-5'>
                <div className='container'>
                    <ProductConsumer>
                        {(value)=> {
                            return value.products.phones.map((product) =>
                                <Product key={product.id} product={product}/>
                            )  
                        }}
                    </ProductConsumer>
                </div>
            </div>
        </React.Fragment>
    )
}
