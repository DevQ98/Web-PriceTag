import React from 'react';
import Image from 'react-bootstrap/Image';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import '../../../assets/css/Home.css';
const Item = ({ number }) => {
  return (
    <div className=" price-tag">
      <Image src="./images/stamp_01.jpg" />
      <div className="stamp__overlay">
        <div className="stamp-name"> 142100 - Stamp Tai nghe Bluetooth </div>
        <div className="stamp__actions">
          <div>
            <Link to="design">
              <Button outline color="primary">
                Edit
              </Button>
            </Link>
          </div>
          <div>
            <Link to="#">
              <Button outline color="danger">
                Delete
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Item;
