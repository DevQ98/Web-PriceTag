
import * as React from "react";
import Selecto from "react-selecto";
import Moveable from "react-moveable";

import "./TxtElement.css"
export default function TxtElement (props) {
    const [targets, setTargets] = React.useState([]);
    const [frameMap] = React.useState(() => new Map());
    const moveableRef = React.useRef(null);
    const selectoRef = React.useRef(null);
    const cubes = [];

    for (let i = 0; i < 30; ++i) {
        cubes.push(i);
    }

   return <div className="moveable app">
        <div className="container">         


            <div className="elements selecto-area">
                {cubes.map(i => <div className="cube target" key={i}></div>)}
            </div>
            <div className="empty elements"></div>
        </div>
    </div>;
}