import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.js';
import Routers from './Routers/Routers.js';
import axios from 'axios';

import './App.css';
import priceTagApi from './api/pricetagAPI.js';
function App() {
  //cerate state variables
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = { _page: 1, _limit: 10 };
        const response = await priceTagApi.getAll(params);
        console.log('Fetch products successfully: ', response);

        // setProductList(response.data);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    };
    fetchProductList();
  }, []);

  return (
    <>
      <Router>
        <Navbar design=" true"></Navbar>
        <Switch>
          {Routers.map((route, index) => {
            return (
              <Route key={index} path={route.path} exact={route.exact} component={route.main} />
            );
          })}
        </Switch>
      </Router>
    </>
  );
}

export default App;
