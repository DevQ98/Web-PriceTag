import { Jumbotron } from 'react-bootstrap';
import React from 'react';
import Carousel from 'react-elastic-carousel';
import Item from "./Item";
import  Row from 'react-bootstrap/Row';

import "../../../assets/css/Home.css";
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
const TagList = (props) => {
    return (
        <div className='container-fluid pt-3'> 
            <Jumbotron className="jumbotron">                    
                    <Row className="item-area">                                 
                        <Carousel breakPoints={breakPoints} >
                            <Item number="1"></Item>
                            <Item number="2"></Item>
                            <Item number="3"></Item>
                            <Item number="4"></Item>
                            <Item number="5"></Item>
                            <Item number="6"></Item>
                            <Item number="7"></Item>
                            <Item number="8"></Item>
                        </Carousel>    
                    </Row>
            </Jumbotron>
            </div>
    );
};

export default TagList;