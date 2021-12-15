import React from 'react'

export default function CartColumns() {
    return (
        <div className='container text-center d-none d-lg-block'>
            <div className='row '>
                <div className='col-10 mx-auto col-lg-2'>
                    <p className='text-uppercase cartColumns'><strong>Products</strong></p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <p className='text-uppercase cartColumns'><strong>name of product</strong></p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <p className='text-uppercase cartColumns'><strong>price</strong></p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <p className='text-uppercase cartColumns'><strong>quantity</strong></p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <p className='text-uppercase cartColumns'><strong>remove</strong></p>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                    <p className='text-uppercase cartColumns'><strong>total</strong></p>
                </div>
            </div>
        </div>
    )
}
