import React from 'react';
import { FaTrash } from 'react-icons/fa';

export default function CartItem({item, value}) {
    const {id, title, img, price, total, count} = item;
    const {incrementQuantity, decrementQuantity, removeItem} = value;
    return (
        <div className='row my-2 text-capitalize text-center'>
            <div className='col-10 mx-auto col-lg-2'>
                <img src={img} alt='product' style={{width:'5rem',height:'5rem'}} className='img-fluid'></img>
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                 <span>product : {title}</span>
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                 <span>price : ${price}</span>
            </div>
            <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
                 <div className='d-flex justify-content-center'>
                    <div >
                        <span className='btn btn-black mx-1' onClick={()=>decrementQuantity(id)}>-</span>
                        <span className='btn btn-black mx-1'>{count}</span>
                        <span className='btn btn-black mx-1' onClick={()=>incrementQuantity(id)}>+</span>
                    </div>
                 </div>
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                 <div className='cart-icon' onClick={()=>removeItem(id)}>
                     <FaTrash></FaTrash>
                 </div>
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                 <strong>total : ${total}</strong>
            </div>
        </div>
        
    )
}
