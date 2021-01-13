import React from 'react';
import Image from 'react-bootstrap/Image';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import '../../../assets/css/Home.css';
import { addElement, setCurrentStamp } from 'app/stampSlice';

function Item({ number }) {
  const dispatch = useDispatch();
  const handleEditClick = () => {
    const currentStamp = JSON.parse(localStorage.getItem('Price'));
    if (currentStamp != null) {
      let action = setCurrentStamp(currentStamp.current);
      dispatch(action);
    } else {
      const stamp = {
        frame: { w: 100, h: 100 },
        elementList: [],
      };
      let action = setCurrentStamp(stamp);
      dispatch(action);
    }
  };

  return (
    <div className=" price-tag">
      <Image src="./images/stamp_01.jpg" />
      <div className="stamp__overlay">
        <div className="stamp-name"> 142100 - Stamp Tai nghe Bluetooth </div>
        <div className="stamp__actions">
          <div>
            <Link to="design">
              <Button outline color="primary" onClick={handleEditClick}>
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
}
export default Item;
