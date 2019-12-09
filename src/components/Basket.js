import React, { useState } from 'react'
import services from '../files/services'
import ServiceSub from './ServicesSub'
import { FaTimes } from 'react-icons/fa'

const Basket = (props) => {

    const [orderedTreatments, setOrderedTreatments] = useState([services.treatments])
  
    const addToBasket = (treatment) => {
        setOrderedTreatments([...orderedTreatments, treatment])
    }

    const exitBasket = () => {
        console.log("Hello")
    }
    return (
        <div className='basket'>
            <FaTimes className='x' onClick={exitBasket} />
            <h2>Basket</h2>
            <div className='basketContent'>
                {
                    orderedTreatments.map( (orderedTreatment, i) => 
                    <p>
                        <ServiceSub key={i} treatment={orderedTreatment.treatment} />
                        <span className='btnRemove'></span>
                    </p> )
                }
            </div>
        </div>
    )
}

export default Basket