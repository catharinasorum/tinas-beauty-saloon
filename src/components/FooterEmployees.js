import React from 'react'
import '../App.css'

const FooterEmployees = (props) => {
    return (
        <div className='employee'>
            <h3>{props.name}</h3><br />
            <div>
                <img src={props.picture} alt='The employee of Tinas beauty saloon'/>
            </div>
            <div>
                <p>{props.position[0]}</p>
                <p>{props.position[1]}</p>
                <p>{props.position[2]}</p>
                <p>{props.position[3]}</p>
            </div>
        </div>
    )
}

export default FooterEmployees