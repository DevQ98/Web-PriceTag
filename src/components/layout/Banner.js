import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import { IoIosSearch } from "react-icons/io";
import '../../assets/css/Banner.css';
function Banner() {
    return (
        <div className="banner-fluid ">           
            <form className='banner__from' >
                <div className='banner__from-search'>
                    <IoIosSearch className='from-search__icon'/> 
                    <input type="text" className="from-search__input" 
                        autocomplete="off" data-toggle="db-search-input" placeholder="   Search Prices Tag"></input>                                                
                </div>                                              
            </form> 
        </div>
    )
}

export default Banner;

