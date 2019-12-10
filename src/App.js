import React from 'react'
import './App.css'
import Services from './components/Services'
import Footer from './components/Footer'


const App = (props) => {

  return (
    <div className='App'>
      <section className='Header'>
        <h1>Tina's Beauty Saloon</h1>
      </section>
      
      <section className='Main'>
        <section className='background p1' >
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

        <Services />

        <Footer />

      </section>
    </div>
  );
}

export default App;
