import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div class="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="The Lean startup"
            price={19.99}
            rating={3}
            image="https://miro.medium.com/max/331/1*ZMe1nCevc9Kp8lzzfYIsZg.jpeg"
            
          />
          <Product
          id="49538094" 
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/810%2BGNdkzKL._ACSX"
            
          />
        </div>
        <div className="home__row">
          <Product />
          <Product />
        </div>
        <div className="home__row">
          {' '}
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
