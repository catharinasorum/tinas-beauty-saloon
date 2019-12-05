import React from 'react'
import './App.css'
import { FaShoppingBasket, FaBars } from 'react-icons/fa'


const App = () => {
  return (
    <div className='App'>
      <section className='Header'>
        <nav className='Menu'>
          < FaBars className='menu-bar'/>
          <h1 className='header-link'>Tina's Beauty Saloon</h1>
          < FaShoppingBasket className='menu-basket'/>
        </nav>
      </section>
      
      <section className='Main'>
        <section className='background p1'>
          <h2>VOTED BEST HAIR SALON IN ARMADILLO</h2>
        </section>

        <section className='text home'>
          <p>Our award-winning salon (or saloon as we call it) is a full-service salon committed to giving guests the best salon experiens in the wild west. We serve whiskey and beer while you're here.
          <br/>
          <br/>
          Hitch your horses right outside! We have a stable boy who will take care of your horse free of charge.
          <br/>
          <br/>
          Sadly, we cannot take care of your cows, they are to many for us to handle.</p>
        </section>

        <section className='background p2'>
          <h2>Services</h2>
        </section>

        <section className='text services'>
          <p>We can offer these services</p>
        </section>

        <section className='Footer'>
            <h2>Get in touch with us!</h2>
            <p><b>Phone number:</b> +1-602-555-0162</p>
            <p><b>Mail address:</b> post@tinasaloon.com</p>
            <p><b>Address:</b> 1374 Boone Crocket Lane, Armadillo</p>
        </section>

      </section>
    </div>
  );
}

export default App;
