import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Basket = () => {

    const exitBasket = () => {
        console.log("Hello")
    }
    return (
        <div className='basket'>
            <FaTimes className='x' onClick={exitBasket} />
            <h2>Basket</h2>
        </div>
    )
}

export default Basket