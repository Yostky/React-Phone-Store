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
/*
- This is an introductory page for the website. I want this to have a huge jumbotron with text ontop to set the stage that this is has tech products.
- I want three pictures that depict a phone, tablet, and laptop to show off the categories. Add flashy animation.
- 
*/