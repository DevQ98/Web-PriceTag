import React, { Component } from 'react';
import '../../../assets/css/Home.css';

export default function StampElement({ element }) {
  return (
    <>
      <ul>
        <li
          className="items-element apply-font cube target"
          style={{ ...element.attributes }}
          id={element.id}
        >
          {element.name}
        </li>
      </ul>
    </>
  );
}
