import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.js';
import Routers from './Routers/Routers.js';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setCurrentStamp } from 'app/stampSlice';
import './App.css';
import priceTagApi from './api/pricetagAPI.js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import elementsApi from './api/elementsAPI.js';
function App() {
  //cerate state variables
  const dispatch = useDispatch();
  const [productList, setProductList] = useState([]);

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
