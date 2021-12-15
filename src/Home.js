import React from 'react'
import { ProductConsumer } from './assets/context';
import Product from './components/Product';
import { Jumbotron } from './components/Jumbotron';

export default function Home() {
    return (
        <React.Fragment>
        <Jumbotron/>
        <div className='container '>
            <h1 className='styledHeader1'>
                <strong>THE BEST TECH ON THE WEB</strong>
            </h1>
        </div>
        <div className='container'>
         <div className='py-5'>
                <div className='container'>
                    <div className="p-3 mb-2 bg-light text-dark">
                        <h1><strong>Phones</strong></h1>
                        <h3>These refurbished phones have been made brand new and can't be matched in price or quality.</h3>    
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
                        <h1><strong>Laptops</strong></h1>
                        <h3>These are refurbished laptops that have been revitalized with new components. These are high quality laptops that need a home!</h3>    
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
                        <h1><strong>Tablets</strong></h1>
                        <h3>These are refurbished tablets that have been rekindled to the same glory as their non-refurbished cousins. These tablets are of the same quality
                            as new ones, but at a fraction of the cost.</h3>    
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
        </div>
        </React.Fragment>
    )
}
/*
- This is an introductory page for the website. I want this to have a huge jumbotron with text ontop to set the stage that this is has tech products.
- I want three pictures that depict a phone, tablet, and laptop to show off the categories. Add flashy animation.
- 
*/
