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
    </div>
  );
}

export default App;
