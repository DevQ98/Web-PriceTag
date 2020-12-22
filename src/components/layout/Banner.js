import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import '../../assets/css/Banner.css';
function Banner() {
    return (
        <div className="container-fluid pt-3">           
            <form className="banner" >
                <div className='banner__search'>
                    <span className="icon__search"> <i class="fa fa-search "></i> </span> 
                    <input type="text" className="panel-search-input" 
                        autocomplete="off" data-toggle="db-search-input" placeholder="Search Pices Tag"></input>                                                
                </div>                                              
            </form> 
        </div>
    )
}

export default Banner;

