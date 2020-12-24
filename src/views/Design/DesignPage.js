
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
export default function DesignPage (props) {
    console.log("props", props)
    const [targets, setTargets] = React.useState([]);
    const [frameMap] = React.useState(() => new Map());
    const moveableRef = React.useRef(null);
    const selectoRef = React.useRef(null);
    const cubes = [];

    // const arr=  props.priceArray.filter(function (item) {
    //     return item.id = e.target.attributes.id
    // })

    // arr[0].fontSize = 434;


    // const aarr = Object.assign([], arr);


   return <div className="moveable app" style={{margin: "auto"}}>
          
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
                    target.style.fontSize= props.fontSize+"px";

                    target.style.fontWeight = props.isBold ?  'bold' : 'normal';
                    target.style.fontStyle = props.isItalic ?  'italic' : 'normal';
                    target.style.color = props.color;
                    if(props.isLineCenter == true)
                    {
                        target.style.textAlign = 'center';
                    }
                    else
                    {
                        if(props.isLineLeft == true)
                        {
                            target.style.textAlign = "left";
                        }
                        else
                        {
                            target.style.textAlign = "right";
                        }
                    }

                    e.set(frame.translate);
                }}
                onDrag={e => {
                    debugger
                    const target = e.target;
                    const frame = frameMap.get(target);
                
                    frame.translate = e.beforeTranslate;
                    target.style.transform = `translate(${frame.translate[0]}px, ${frame.translate[1]}px)`;

                }}
                onDragGroupStart={e => {
                    e.events.forEach(ev => {
                        
                        const target = ev.target;
                        debugger
                        target.style.fontSize= props.fontSize+"px";
                        if (!frameMap.has(target)) {
                            frameMap.set(target, {
                                translate: [0, 0],
                            });
                        }
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
                selectByClick={true}
                selectFromInside={true}
                toggleContinueSelect={["shift"]}
                ratio={0}
                onDragStart={e => {
                    const moveable = moveableRef.current;
                    const target = e.inputEvent.target;
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
                
                        setTimeout(() => {
                             moveable.dragStart(e.inputEvent);
                        });
                    }
                }}
            ></Selecto>

            <div className="elements selecto-area items-template " style={{ height : props.height +"mm" , width : props.width + "mm" , background : props.BG}}>
                {                                    
                    props.priceArray.map((tag , index) =>{
                                                
                        return(        
                            <PriceElement 
                                key={index}
                                id ={tag.id}
                                body = {tag.body}                                                   
                                color={props.color}
                                fontSize={props.fontSize}
                                bold = {  props.isBold ?  'bold' : 'normal' }
                                italic = { props.isItalic ? 'italic' : 'normal'}>
                            </PriceElement>
                        )
                    })  
                }
                {                                    
                    props.nameArray.map((tag , index) =>{
                                                
                        return(        
                            <NameElement 
                                key={index}
                                id ={tag.id}
                                body = {tag.body}                                                   
                                color={props.color}
                                fontSize={props.fontSize}
                                bold = {  props.isBold ?  'bold' : 'normal' }
                                italic = { props.isItalic ? 'italic' : 'normal'}>
                            </NameElement> 
                            )
                        
                    })  
                }
                {                                    
                    props.brandArray.map((tag , index) =>{
                                                
                        return(        
                            <BrandElement 
                                key={index}
                                id ={tag.id}
                                body = {tag.body}                                                   
                                color={props.color}
                                fontSize={props.fontSize}
                                bold = {  props.isBold ?  'bold' : 'normal' }
                                italic = { props.isItalic ? 'italic' : 'normal'}>
                            </BrandElement>
                        )
                    })  
                }
                {                                    
                    props.dateArray.map((tag , index) =>{
                                                
                        return(        
                            <DateElement 
                                key={index}
                                id ={tag.id}
                                body = {tag.body}                                                   
                                color={props.color}
                                fontSize={props.fontSize}
                                bold = {  props.isBold ?  'bold' : 'normal' }
                                italic = { props.isItalic ? 'italic' : 'normal'}>
                            </DateElement>
                        )
                    })  
                }
                {                                    
                    props.discountArray.map((tag , index) =>{
                                                
                        return(        
                            <DiscountElement 
                                key={index}
                                id ={tag.id}
                                body = {tag.body}                                                   
                                color={props.color}
                                fontSize={props.fontSize}
                                bold = {  props.isBold ?  'bold' : 'normal' }
                                italic = { props.isItalic ? 'italic' : 'normal'}>
                            </DiscountElement>
                        )
                    })  
                }
                {                                    
                    props.promotionArray.map((tag , index) =>{
                                                
                        return(        
                            <PromotionElement 
                                key={index}
                                id ={tag.id}
                                body = {tag.body}                                                   
                                color={props.color}
                                fontSize={props.fontSize}
                                bold = {  props.isBold ?  'bold' : 'normal' }
                                italic = { props.isItalic ? 'italic' : 'normal'}>
                            </PromotionElement>
                        )
                    })  
                }
                {                                    
                    props.statusArray.map((tag , index) =>{
                                                
                        return(        
                            <StatusElement 
                                key={index}
                                id ={tag.id}
                                body = {tag.body}                                                   
                                color={props.color}
                                fontSize={props.fontSize}
                                bold = {  props.isBold ?  'bold' : 'normal' }
                                italic = { props.isItalic ? 'italic' : 'normal'}>
                            </StatusElement>
                        )
                    })  
                }


            </div>
    </div>;
}