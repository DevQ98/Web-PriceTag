import React, { Component } from 'react';
import '../../../assets/css/Home.css';
const onKeyPressed = (e) => {
  console.log(e.key, ' key');
};
export default function StampElement({ element }) {
  return (
    <>
      <div
        className="items-element apply-font cube target"
        style={{ ...element.attributes }}
        id={element.id}
        onChange={onKeyPressed}
        tabIndex="0"
      >
        {element.name}
      </div>
    </>
  );
}
