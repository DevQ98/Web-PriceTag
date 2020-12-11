import React from 'react';
import Image from 'react-bootstrap/Image';

const Item = ({number}) => {
  return (
    <div className="item" >
        <Image src='./images/stamp_01.jpg' width ="100%" height="100%" />  
    </div>
  );
};

export default Item ;