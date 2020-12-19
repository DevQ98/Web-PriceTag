import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.js';
import Routers from './Routers/Routers.js';

import './App.css';
function App() {
      return (
        <>
          <Router>
            <Navbar design=" true"></Navbar>
            <Switch>
               {                 
                Routers.map((route, index) =>{
                     return <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                    />
                 })
               }
            </Switch>
          </Router>
        </>
    )
}

export default App;
