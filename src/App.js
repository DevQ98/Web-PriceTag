import priceTagApi from 'api/pricetagAPI';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from './components/layout/Navbar.js';
import Routers from './Routers/Routers.js';
function App() {
  const [stampList, setStampList] = useState([]);

  useEffect(() => {
    const fetchStampList = async () => {
      try {
        const params = { _page: 1, _limit: 10 };
        const response = await priceTagApi.getAllPriceTag(params);
        const responseID = await priceTagApi.getStampById(5);
        console.log('Fetch products successfully: ', response);
        console.log('Fetch products successfully: ', responseID);
        const stamp = { current: response[6] };
        localStorage.setItem('Price', JSON.stringify(stamp));
        setStampList(response.data);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    };
    fetchStampList();
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
