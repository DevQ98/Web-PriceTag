import React, {Component } from 'react';
import Banner from '../../components/layout/Banner.js';
import HomePage from './HomePage';
import '../../App.css';
import '../../assets/css/Home.css';
function Home() {    
    return (
            <>
                <Banner></Banner>
                <HomePage></HomePage>
            </>
    );
}

export default Home;

