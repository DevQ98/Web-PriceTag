import React from 'react';
import Image from 'react-bootstrap/Image';
import '../../../assets/css/Home.css'
const Item = ({number}) => {
  return (
    <div className=" price-tag" >
        <Image src='./images/stamp_01.jpg'/>  
        <div className='stamp-name'> 142100 - Stamp Tai nghe Bluetool </div>
    </div>
  );
};
export default Item ;