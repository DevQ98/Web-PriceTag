import React, { Component, useEffect } from 'react';
import '../../../assets/css/Home.css';

export default function StampElement({ element }) {
  return (
    <div
      className="items-element apply-font cube target"
      style={{ ...element.attributes }}
      id={element.id}
      // onKeyDown={handleDelete}
      // onClick={handleDelete}
    >
      {element.name}
    </div>
  );
}
