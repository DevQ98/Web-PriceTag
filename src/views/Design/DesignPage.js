
import * as React from "react";
import Selecto from "react-selecto";
import Moveable from "react-moveable";
import parse from 'html-react-parser';
import PriceElement from "../../components/common/Draggable/Price-Element";
import "../../components/common/Draggable/TxtElement.css"
import {  isTarget, saveTem } from '../../actions/designAction.js'
import { connect } from 'react-redux';
 function DesignPageCom (props) {
    const [targets, setTargets] = React.useState([]);
    const [frameMap] = React.useState(() => new Map());
    const moveableRef = React.useRef(null);
    const selectoRef = React.useRef(null);
    const cubes = [];
    // const PriceArray = props.addPrice.Array[0]
    console.log("Props of DesignPage" ,  props)

    const PriceArray = props.Price.ArrayPRice;

    // console.log(NameArray , "priceArray");
    // const NameArray = props.addName.ArrayName;
    // const arr=  props.priceArray.filter(function (item) {
    //     return item.id = e.target.attributes.id
    // })

    // arr[0].fontSize = 434;

    // setTargerElement =(e) => {
    //     setTargets(e.selected);
    //     props.changeBold(e.selected);

    // }
    // // const aarr = Object.assign([], arr);
    const html = document.getElementById('element__show');
    if( html != null )
    {
      const  htmlString =  html.outerHTML;
      console.log(htmlString);
    }
    
    React.useEffect(()=> {
        // {
        //     props.Tem.map( (tag ) => {
                
        //         {
        //             tag.lenght != html.lenght ?  ()=> saveTem(1 , html) : true
        //         }
               
        //     })
        // }
     
        
    })
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
                    console.log(html.outerHTML , "HTML");
                    props.saveTem( html.outerHTML);
                    const moveable = moveableRef.current;
                    if (e.isDragStart) {
                        e.inputEvent.preventDefault();

                    }

                }}
            ></Selecto>
            { 
            <div id ='element__show' className="elements selecto-area items-template " style={{ height : props.height +"mm" , width : props.width + "mm" , background : props.BG}}>
                {                                   
                    PriceArray.map((tag , index) =>{
                        return(        
                            <PriceElement 
                                key={index}
                                id = {tag.id}
                                body = {tag.body}                                            
                                isTarget = {props.Price.isActive}
                                fontWeight = { tag.fontWeight}
                                fontStyle = { tag.fontStyle}   
                                textAlign = { tag.textAlign}    
                                bullet = { tag.bullet}
                                lineHeight = { tag.lineHeight}       
                                html = {<div className="items-element apply-font cube target" id="50.362001319757475" style={{fontWeight: 'bold'}}>Gia San Pham</div>}        
                            ></PriceElement>
                        )
                    })  
                }
               
                
                </div> 
  
                }
                {/* {console.log(props.Tem.state , " HTML")}
                {parse(props.Tem.state)} */}

                
    </div>;
}
// parse(html.toString()) 
const mapStateToProps = state => {
    return {
       Price : state.Price,
       Tem : state.Tem
    }
}

const mapDispatchToProps = dispatch => {
    return {

        saveTem : html => {
            dispatch(saveTem(html))
        },
        isTarget : id => {
            dispatch(isTarget(id))
        }
       
    };
};

const DesignPage = connect(mapStateToProps, mapDispatchToProps)(DesignPageCom);

export default DesignPage