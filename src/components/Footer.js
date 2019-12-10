import React, {useState} from 'react'
import '../App.css'
import FooterEmployees from './FooterEmployees'
import employeeFiles from '../files/employeeFiles'

const Footer = () => {
    
    const [employees] = useState(employeeFiles.persons)

    return (
        <section className='Footer text'>
            <h2>Here are the amazing workers at Tina's Beauty Saloon</h2>
                <div className="employees">
                    {
                        employees.map (
                            (employee, i) => <FooterEmployees name={employee.name} key={i} number={i} picture={employee.picture} position={employee.position} />
                            )
                        }
                </div>
            <h2>Get in touch with us!</h2>
                <p><b>Phone number:</b> +1-602-555-0162</p>
                <p><b>Mail address:</b> post@tinasaloon.com</p>
                <p><b>Address:</b> 1374 Boone Crocket Lane, Armadillo</p>

            
        </section>
    )
}

export default Footer 