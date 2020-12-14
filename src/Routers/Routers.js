import React from 'react'; 
import Home from '../views/Home/Home';
import History from "../views/History/History";
import Design from "../views/Design/Design";
import NotFound from "../views/Page404/NotFound";

const Routers= [
    {
        path : '/',
        exact : true,
        main : () => <Home/>
    },
    {
        path : '/history',
        exact : false,
        main : () => <History/>
    },
    {
        path : '/design',
        exact : false,
        main : () => <Design/>
    },    
    {
        path : '/notfond',
        exact : false,
        main : () => <NotFound/>
    }, 
];
export  default Routers;