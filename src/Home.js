import React from 'react'
import { ProductConsumer } from './assets/context';
import Product from './components/Product';
import { Jumbotron } from './components/Jumbotron';




export default function Home() {
    return (
        <React.Fragment>
        <Jumbotron/>
            <div className='py-5'>
                <div className='container'>
                    <div className="p-3 mb-2 bg-light text-dark">
                        <h1>Phones</h1>
                        <h3>Description of why you should spend all your money</h3>    
                    </div>
                    <ProductConsumer>
                        {(value)=> {
                            return value.products.phones.map((product) =>
                                <Product key={product.id} product={product}/>
                            )  
                        }}
                    </ProductConsumer>
                </div>
            </div>
            <div className="py-5">
                <div className="container">
                <div className="p-3 mb-2 bg-light text-dark">
                        <h1>Laptops</h1>
                        <h3>Description of why you should spend all your money</h3>    
                    </div>
                    <ProductConsumer>
                        {(value)=> {
                            return value.products.laptops.map((product) =>
                                <Product key={product.id} product={product}/>
                            )  
                        }}
                    </ProductConsumer>
                </div>
            </div>
            <div className="py-5">
                <div className="container">
                <div className="p-3 mb-2 bg-light text-dark">
                        <h1>Tablets</h1>
                        <h3>Description of why you should spend all your money</h3>    
                    </div>
                    <ProductConsumer>
                        {(value)=> {
                            return value.products.tablets.map((product) =>
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