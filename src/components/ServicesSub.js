import React from 'react'
import '../App.css'

const ServicesSub = (props) => {

    return (
        <div className='treatmentList'>
            <p>{props.treatment}</p>
            <p>{props.price}</p> 
        </div>
    )
}

export default ServicesSub