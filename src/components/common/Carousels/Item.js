import React from 'react';
import Image from 'react-bootstrap/Image';
import { Link  } from 'react-router-dom';

import '../../../assets/css/Home.css'
const Item = ({number}) => {
  return (
    <div className=" price-tag" >
        <Image src='./images/stamp_01.jpg'/>  
        <div className='stamp-name'> 142100 - Stamp Tai nghe Bluetooth </div>
        <div className='price-tag__menu'>
          <Link to='design' ><button  className='btn  btn--edit' > edit</button></Link>  
          <Link to='#' ><button  className='btn btn--edit' > copy</button></Link>
          <Link to='#' ><button  className='btn btn--edit' > delete</button></Link>

        </div>
    </div>
  );
};
export default Item ;