import { Jumbotron } from 'react-bootstrap';
import React from 'react';
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import Row from 'react-bootstrap/Row';

import '../../../assets/css/Home.css';
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 240, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
const TagList = (props) => {
  return (
    <div className="container-fluid pt-3">
      <Jumbotron className="jumbotron">
        <Row className="item-area">
          <Carousel breakPoints={breakPoints}>
            <Item
              number="1"
              photo="./images/stamp_01.jpg"
              title="142100 - Stamp Tai nghe Bluetooth "
            ></Item>
            <Item
              number="2"
              photo="./images/stamp_02.jpg"
              title="142100 - Stamp Tai nghe Bluetooth "
            ></Item>
            <Item
              number="3"
              photo="./images/stamp_03.jpg"
              title="142100 - Stamp Tai nghe Bluetooth "
            ></Item>
            <Item
              number="4"
              photo="./images/stamp_04.jpg"
              title="142100 - Stamp Tai nghe Bluetooth "
            ></Item>
            <Item
              number="5"
              photo="./images/stamp_01.jpg"
              title="142100 - Stamp Tai nghe Bluetooth "
            ></Item>
            <Item
              number="6"
              photo="./images/stamp_05.jpg"
              title="142100 - Stamp Tai nghe Bluetooth "
            ></Item>
            <Item
              number="7"
              photo="./images/stamp_04.jpg"
              title="142100 - Stamp Tai nghe Bluetooth "
            ></Item>
            <Item
              number="8"
              photo="./images/stamp_03.jpg"
              title="142100 - Stamp Tai nghe Bluetooth "
            ></Item>
            <Item
              number="9"
              photo="./images/stamp_02.jpg"
              title="142100 - Stamp Tai nghe Bluetooth "
            ></Item>
            <Item
              number="10"
              photo="./images/stamp_01.jpg"
              title="142100 - Stamp Tai nghe Bluetooth "
            ></Item>
          </Carousel>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default TagList;
