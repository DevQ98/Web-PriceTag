import React from 'react';
import Item from './Item';
import '../../../assets/css/Home.css';

const stampList = [
  {
    id: 1,
    stamp: (
      <Item number="10" photo="./images/stamp_01.jpg" title="142100 - Stamp Tai nghe Bluetooth " />
    ),
  },
  {
    id: 2,
    stamp: (
      <Item number="10" photo="./images/stamp_02.jpg" title="142100 - Stamp Tai nghe Bluetooth " />
    ),
  },
  {
    id: 3,
    stamp: (
      <Item number="10" photo="./images/stamp_03.jpg" title="142100 - Stamp Tai nghe Bluetooth " />
    ),
  },
  {
    id: 4,
    stamp: (
      <Item number="10" photo="./images/stamp_04.jpg" title="142100 - Stamp Tai nghe Bluetooth " />
    ),
  },
  {
    id: 5,
    stamp: (
      <Item number="10" photo="./images/stamp_05.jpg" title="142100 - Stamp Tai nghe Bluetooth " />
    ),
  },
  {
    id: 6,
    stamp: (
      <Item number="10" photo="./images/stamp_05.jpg" title="142100 - Stamp Tai nghe Bluetooth " />
    ),
  },
  {
    id: 7,
    stamp: (
      <Item number="10" photo="./images/stamp_02.jpg" title="142100 - Stamp Tai nghe Bluetooth " />
    ),
  },
  {
    id: 8,
    stamp: (
      <Item number="10" photo="./images/stamp_04.jpg" title="142100 - Stamp Tai nghe Bluetooth " />
    ),
  },
  {
    id: 9,
    stamp: (
      <Item number="10" photo="./images/stamp_01.jpg" title="142100 - Stamp Tai nghe Bluetooth " />
    ),
  },
  {
    id: 10,
    stamp: (
      <Item number="10" photo="./images/stamp_03.jpg" title="142100 - Stamp Tai nghe Bluetooth " />
    ),
  },
  {
    id: 11,
    stamp: (
      <Item number="10" photo="./images/stamp_02.jpg" title="142100 - Stamp Tai nghe Bluetooth " />
    ),
  },
  {
    id: 12,
    stamp: (
      <Item number="10" photo="./images/stamp_04.jpg" title="142100 - Stamp Tai nghe Bluetooth " />
    ),
  },
];
function ItemList() {
  return (
    <>
      <div className="list-item">
        {stampList.map((tag) => (
          <div className="list-tag">{tag.stamp}</div>
        ))}
      </div>
    </>
  );
}

export default ItemList;
