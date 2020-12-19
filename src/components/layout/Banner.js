import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import '../../assets/css/Banner.css';
function Banner() {
    return (
        <div className="container-fluid pt-3">           
            <form className="banner" >
                <div className='banner__search'>
                    <a className='search-icon'> <i  className="fas fa-search"> </i></a>
                    <FormControl className='input-search'  type="text" placeholder=" Search price tag"  />                                                    
                </div>                                              
            </form> 
        </div>
    )
}

export default Banner;

