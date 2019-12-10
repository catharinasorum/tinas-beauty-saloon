import React, {useState} from 'react'
import '../App.css'
import services from '../files/services'
import ServicesSub from './ServicesSub'

const Services = (props) => {

    const [treatments, setTreatments] = useState(services.treatments)

    const filterTreatments = (evt) => {
        setTreatments (
            services.treatments.filter( treatment => treatment.treatment.toLowerCase().includes(evt.target.value) )
        )
    }
    
    return (
        <section className='text services'>
          <h3>We can offer these services</h3>
          <input type='text' className='inpTreatment' placeholder='Search through all our services' onInput={filterTreatments}/>
          <div className='treatments'>
              {
                  treatments.map(
                      (treatment, i) => <ServicesSub treatment={treatment.treatment}  key={i} number={i} price={treatment.price}/>
                  )
              }
          </div>
        </section>
    )
}

export default Services

