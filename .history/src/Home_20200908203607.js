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
            image="https://images-na.ssl-images-amazon.com/images/I/810%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="data:image/jpeg;base64,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"
          />
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
