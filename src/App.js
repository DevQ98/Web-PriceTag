import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import History from './components/pages/History';
import Design from './components/pages/Design';


import Toolbar from 'polotno/toolbar/toolbar';
import ZoomButtons from 'polotno/toolbar/zoom-buttons';
import SidePanel from 'polotno/side-panel/side-panel';
import Workspace from 'polotno/canvas/workspace';


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
