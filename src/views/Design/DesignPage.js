
import * as React from "react";
import Selecto from "react-selecto";
import Moveable from "react-moveable";

import "../../components/common/Draggable/TxtElement.css"
import PriceElement from "../../components/common/Draggable/Price-Element";
import BrandElement from "../../components/common/Draggable/Brand-Element";
import DateElement from "../../components/common/Draggable/Date-Element";
import DiscountElement from "../../components/common/Draggable/Discount-Element";
import PromotionElement from "../../components/common/Draggable/Promotion-Element";
import NameElement from "../../components/common/Draggable/Name-Element";
import StatusElement from "../../components/common/Draggable/Status-Element";
import Board from "../../components/common/Draggable/Board"

import {  isTarget } from '../../actions/designAction.js'
import { connect } from 'react-redux';
 function DesignPageCom (props) {
    // console.log("propssss", props.addPrice.Array[0].body)
    const [targets, setTargets] = React.useState([]);
    const [frameMap] = React.useState(() => new Map());
    const moveableRef = React.useRef(null);
    const selectoRef = React.useRef(null);
    const cubes = [];
    // const PriceArray = props.addPrice.Array[0]
   // console.log("ri" , props);
    console.log("Ass" ,  props)

    const PriceArray = props.addPrice.ArrayPRice;
    const NameArray = props.addName.ArrayName;
    // const arr=  props.priceArray.filter(function (item) {
    //     return item.id = e.target.attributes.id
    // })

    // arr[0].fontSize = 434;

    // setTargerElement =(e) => {
    //     setTargets(e.selected);
    //     props.changeBold(e.selected);

    // }
    // // const aarr = Object.assign([], arr);


   return <div className="moveable app" style={{margin: "auto"} }>
            <Moveable
                ref={moveableRef}
                draggable={true}
                target={targets}
                onClickGroup={e => {
                    selectoRef.current.clickTarget(e.inputEvent, e.inputTarget);
                }}
                onDragStart={e => {
                    const target = e.target;
                    if (!frameMap.has(target)) {
                        frameMap.set(target, {
                            translate: [0, 0],
                        });
                    }
                    const frame = frameMap.get(target);


                    e.set(frame.translate);
                }}
                onDrag={e => {
                    const target = e.target;
                    const frame = frameMap.get(target);
                
                    frame.translate = e.beforeTranslate;
                    target.style.transform = `translate(${frame.translate[0]}px, ${frame.translate[1]}px)`;

                }}
                onDragGroupStart={e => {
                    e.events.forEach(ev => {
                        
                        const target = ev.target;
                        
                        const frame = frameMap.get(target);
                
                        ev.set(frame.translate);
                    });
                }}
                onDragGroup={e => {
                    e.events.forEach(ev => {
                        const target = ev.target;
                        const frame = frameMap.get(target);
                
                        frame.translate = ev.beforeTranslate;
                        target.style.transform = `translate(${frame.translate[0]}px, ${frame.translate[1]}px)`;
                    });
                }}
            ></Moveable>
            <Selecto
                ref={selectoRef}
                dragContainer={".elements"}
                selectableTargets={[".selecto-area .cube"]}
                hitRate={0}
                autofocus = {true}
                selectByClick={true}
                selectFromInside={true}
                toggleContinueSelect={["shift"]}
                ratio={0}
                onDragStart={e => {
                    const moveable = moveableRef.current;
                    const target = e.inputEvent.target;
                    props.isTarget(target.id);

                    if (
                        moveable.isMoveableElement(target)
                        || targets.some(t => t === target || t.contains(target))
                    ) {
                        e.stop();
                    }
                }}
                onSelect={e => {
                    setTargets(e.selected);
                }}
                onSelectEnd={e => {
                    const moveable = moveableRef.current;
                    if (e.isDragStart) {
                        e.inputEvent.preventDefault();

                    }
                }}
            ></Selecto>

            <div className="elements selecto-area items-template " style={{ height : props.height +"mm" , width : props.width + "mm" , background : props.BG}}>
                {/* {                                    
                    PriceArray.map((tag , index) =>{
                        console.log(props.addPrice.isActive , " activev2")                     
                        return(        
                            <PriceElement 
                                key={index}
                                id = {tag.id}
                                body = {tag.body}                                            
                                isTarget = {props.addPrice.isActive}
                                fontWeight = { tag.fontWeight}
                                                                
                            ></PriceElement>
                        )
                    })  
                }
                {                                    
                    NameArray.map((tag , index) =>{
                                                
                        return(        
                            <NameElement 
                               key={index}
                                id = {tag.id}
                                body = {tag.body}                                            
                                isTarget = {props.addPrice.isActive}
                                fontWeight = { tag.fontWeight}
                            ></NameElement> 
                            )
                        
                    })  
                } */}
                </div>
    </div>;
}
const mapStateToProps = state => {
    return {
       Price : state.Price,
       Name : state.Name
    }
}

const mapDispatchToProps = dispatch => {
    return {

        isTarget : id => {
            dispatch(isTarget(id))
        }
       
    };
};

const DesignPage = connect(mapStateToProps, mapDispatchToProps)(DesignPageCom);

export default DesignPage