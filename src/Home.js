import React from 'react'
// import { storeProducts } from './assets/data';
// import { Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { ProductConsumer } from './assets/context';
import Product from './components/Product'
/*
I need to use context api to create a product producer and consumer to handle the data flow through the app.
This will allow me to handle the state and props in an easy way to the application doesnt need to pass down props through a tree.
This makes the data flow to pass easier thoughout the application.
1:30:00 context api
*/

export default function Home() {
    return (
        <React.Fragment>
            <div className='py-5'>
                <div className='container'>
                    <ProductConsumer>
                        {(value)=> {
                            return value.products.map((product) =>
                                <Product key={product.id} product={product}/>
                            )  
                        }}
                    </ProductConsumer>
                </div>
            </div>
        </React.Fragment>
    )
}