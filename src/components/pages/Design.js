import React from 'react';
import Menu from '../Menu';
import Toolbar from 'polotno/toolbar/toolbar';

function Design(props) {

    console.log("aaa0",props )
    return (
        <div className='design-context'>
            <Menu></Menu>

            {/* <Toolbar store={props} /> */}
        </div>
    )
}

export default Design;