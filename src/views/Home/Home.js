import React from 'react';
import '../../App.css';
import '../../assets/css/Home.css';
import Banner from '../../components/layout/Banner.js';
import HomePage from './HomePage';
function Home() {
  return (
    <>
      <Banner></Banner>
      <HomePage></HomePage>
    </>
  );
}

export default Home;
