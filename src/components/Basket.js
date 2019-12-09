import React, { useState } from 'react'
import services from '../files/services'
import { FaTimes } from 'react-icons/fa'

const Basket = (props) => {

    const [orderedTreatments, setOrderedTreatments] = useState([services.treatments])
  
    const addToBasket = (treatmentName) => {
        setOrderedTreatments([...orderedTreatments, treatmentName])
    }

    const exitBasket = () => {
        console.log("Lukke")
    }
    return (
        <div className='basket'>
            <FaTimes className='x' onClick={exitBasket} />
            <h2>Basket</h2>
            <div className='basketContent'>
                {
                    orderedTreatments.map( (orderedTreatment, i) => 
                    <p key={i}>
                        <span>{props.treatment}</span>
                        <span className='btnRemove'></span>
                    </p> )
                }
            </div>
        </div>
    )
}

export default Basket