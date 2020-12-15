import React from 'react';
import Image from 'react-bootstrap/Image';
import '../../../assets/css/Home.css'
const Item = ({number}) => {
  return (
    <div className="item row" >
        <Image src='./images/stamp_01.jpg' width ="80%" height="80%" />  
        <span className='stamp-name'> 142100 - Stamp Tai nghe Bluetool </span>
    </div>
  );
};

export default Item ;