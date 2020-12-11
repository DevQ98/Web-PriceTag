import React from 'react';
import Draggable from 'react-draggable'
function Card (props) {
    const dragStart = e =>{
        const target = e.target;
        e.dataTransfer.setData('card_id',target.id);
        Card.style.diplay='block'
    }
    const dragOver = e =>{
        e.stopPropagation();
    }
    return (
        <Draggable >
        <div className='card'
            // id={props.id}
            // className={props.className}
            // draggable={props.draggable}
            //  onDragStart={dragStart}
            //  onDragOver={dragOver}
        >
            {props.children}
        </div>
        </Draggable>
    );
}

export default Card