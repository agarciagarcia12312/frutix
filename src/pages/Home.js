import React from 'react';
import FeaturedList from '../helpers/FeaturedList';
import data from  '../helpers/data.js';

const Home = () => (
  <div className='relative'>
    {/* main photo tittle */}
    <div id='mainImage'>
      <span className='center white largeText'>Straight
         From <br className='hideOnDesktop'/>The <br className='hideOnDesktop'/> Source
       </span>
    </div>
    {/* same row Link options */}
    <FeaturedList arraylist={data.featuredList}/>
  </div>
);

export default Home;
