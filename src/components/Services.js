import React, {useState} from 'react'
import '../App.css'
import services from '../files/services'
import ServicesSub from './ServicesSub'

const Services = () => {

    const [treatments, setTreatments] = useState(services.list)
    
    return (
        <section className='text services'>
          <h3>We can offer these services</h3>
          <div className='treatments'>
              {
                  treatments.map(
                      (treatment, i) => <ServicesSub treatment={treatment.treatment} price={treatment.price} />
                  )
              }
          </div>
        </section>
    )
}

export default Services

