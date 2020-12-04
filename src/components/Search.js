import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import './Search.css';
function Search() {
    return (
        <div className="container-fluid pt-3">           
            <form className="form-search" >
                <div className='form-search__search-box'>
                    <a className='search-icon'> <i  class="fas fa-search"> </i></a>
                    <FormControl className='input-search'  type="text" placeholder=" Search design"  />                                                    
                </div>
                                              
            </form> 
        </div>
    )
}

export default Search;

