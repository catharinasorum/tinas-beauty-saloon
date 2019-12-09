import React from 'react'
import Basket from './Basket'
import '../App.css'

const ServicesSub = (props) => {
    return (
        <div className='treatmentList'>
                <p onClick={() => props.addToBasket(props.treatment)}>{props.treatment}</p>
                <p>{props.price}</p>
        </div>
    )
}

export default ServicesSub