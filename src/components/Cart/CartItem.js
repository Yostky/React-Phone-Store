import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

export default function CartItem({item, value}) {
    const {id, title, img, price, total, count} = item;
    const {incrementQuantity, decrementQuantity, removeItem} = value;
    return (
        <div className='row my-2 text-capitalize text-center py-4 align-items-center addedBorder'>
            <div className='col-10 mx-auto col-lg-2'>
                <img src={img} alt='product' style={{width:'10rem',height:'10rem'}} className='img-fluid'></img>
            </div>
            <div className='col-10 mx-auto col-lg-2 cartColumns'>
            product : <span className='blueText'>{title}</span>
            </div>
            <div className='col-10 mx-auto col-lg-2 cartColumns'>
                 <span>price : ${price}</span>
            </div>
            <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
                 <div className='d-flex justify-content-center'>
                    <div >
                        <Button variant="outline-info" size="lg" className='border' onClick={()=>decrementQuantity(id)}>-</Button>{' '}
                        <Button variant="outline-info" size="lg" className='border' onClick={()=>decrementQuantity(id)}>{count}</Button>{' '}
                        <Button variant="outline-info" size="lg" className='border' onClick={()=>incrementQuantity(id)}>+</Button>{' '}
                    </div>
                 </div>
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                 <div className='cart-icon ' onClick={()=>removeItem(id)}>
                     <FaTrash></FaTrash>
                 </div>
            </div>
            <div className='col-10 mx-auto col-lg-2 cartColumns'>
                 <strong>total : ${total}</strong>
            </div>
        </div>
        
    )
}
