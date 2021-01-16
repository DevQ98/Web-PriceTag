import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from './components/layout/Navbar.js';
import Routers from './Routers/Routers.js';
function App() {
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
