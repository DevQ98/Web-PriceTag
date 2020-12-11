import React from 'react';
import Navbar from './components/layout/Navbar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import History from './views/History/History.js';
import Design from './views/Design/Design.js';



import './App.css';
function App(props) {
    console.log("props", props)
    const store = props;
    return (
        <>

          <Router>
            <Navbar></Navbar>
            <Switch>
               <Route path='/' exact component={Home}  />
               <Route path='/history'  component={History} />
               <Route path='/design'  component={Design} />
            </Switch>
          </Router>
        </>
        // <div
        //     style={{
        //         display: 'flex',
        //         height: '100%',
        //         width: '100%',
        //     }}
        // >
        //     <div style={{ width: '300px', height: '100%', display: 'flex' }}>
        //         <SidePanel store={store} />
        //     </div>
        //     <div
        //         style={{
        //             display: 'flex',
        //             height: '100%',
        //             margin: 'auto',
        //             flex: 1,
        //             flexDirection: 'column',
        //             position: 'relative',
        //         }}
        //     >
        //         <Toolbar store={store} />
        //         <Workspace store={store} />
        //         <ZoomButtons store={store} />
        //     </div>
        // </div>
    );
}

export default App;
