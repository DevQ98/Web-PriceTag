import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.js';
import Routers from './Routers/Routers.js';

import './App.css';
class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
      };
}
    render(){
      return (
        <>
          <Router>
            <Navbar></Navbar>
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
    );}
}

export default App;
