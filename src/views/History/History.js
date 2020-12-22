
import React, { Component, useRef ,useEffect } from "react";
import Moveable from "react-moveable";
import Draggable from 'react-draggable';

export default function History() {
    const [element, setTarget] = React.useState();
    const [frame, setFrame] = React.useState({
        translate: [0,0], 
        rotate: 0,
        transformOrigin: "50% 50%",
    });
    React.useEffect(() => {
      
    setTarget(document.querySelector(".target") );
   }, []);
    return  <div className="container">
       
        <div className="target">Target</div>

        <Moveable
            target={element}
            originDraggable={true}
            originRelative={true}
            resizable= {true  }
            draggable = {true}  
            keepRatio={false}
            throttleDrag={0}
            startDragRotate={0}
            throttleDragRotate={0}
          throttleResize={0}
          rotationPosition={"top"}
          renderDirections={["nw", "n", "ne", "w", "e", "sw", "s", "se"]}
          edge={false}
          zoom={1}
          origin={true}
        padding={{ left: 0, top: 0, right: 0, bottom: 0 }}


            zoom={1}
            origin={true}
            padding={{"left":0,"top":0,"right":0,"bottom":0}}
            rotatable={true}
            throttleRotate={0}

            onResizeStart={({ setOrigin, dragStart }) => {
                setOrigin(["%", "%"]);
                dragStart && dragStart.set(frame.translate);
            }}
            onDragOriginStart={({ dragStart }) => {
                dragStart && dragStart.set(frame.translate);
            }}
            onDragOrigin={({ target, drag, transformOrigin }) => {
                frame.translate = drag.beforeTranslate;
                frame.transformOrigin = transformOrigin;
            }}
            onDragStart={({ set }) => {
                set(frame.translate);
            }}
            onDrag={({ target, beforeTranslate }) => {
                frame.translate = beforeTranslate;
            }}
            onRotateStart={({ set }) => {
                set(frame.rotate);
            }}
            onRotate={({ beforeRotate }) => {
                frame.rotate = beforeRotate;
            }}
            onRender={({ target }) => {
                const { translate, rotate, transformOrigin } = frame;
                target.style.transformOrigin = transformOrigin;
                target.style.transform = `translate(${translate[0]}px, ${translate[1]}px)`
                    +  ` rotate(${rotate}deg)`;
            }}
            onResize={({ target, width, height, drag }) => {
                const beforeTranslate = drag.beforeTranslate;
            
                frame.translate = beforeTranslate;
                target.style.width = `${width}px`;
                target.style.height = `${height}px`;
                target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
                
            }}
        />
    </div>
  
}