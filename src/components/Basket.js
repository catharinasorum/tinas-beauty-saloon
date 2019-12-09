import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Basket = (props) => {

    const exitBasket = () => {
        console.log("Hello")
    }
    return (
        <div className='basket'>
            <FaTimes className='x' onClick={exitBasket} />
            <h2>Basket</h2>
            <ul className='basketContent'>
                <li>
                    <span></span>
                    <span className='btnRemove'></span>
                </li> 
            </ul>
        </div>
    )
}

export default Basket