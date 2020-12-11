// import React from 'react';
// import { render } from 'react-dom';
// import { Stage, Layer, Image } from 'react-konva';
// import useImage from 'use-image';
// import Draggable from 'react-draggable'
// import { FiDivideCircle } from 'react-icons/fi';
// const URLImage = ({ image }) => {
//   const [img] = useImage(image.src);
//   return (
//     <Image
//       image={img}
//       x={image.x}
//       y={image.y}
//       // I will use offset to set origin to the center of the image
//       offsetX={img ? img.width / 2 : 0}
//       offsetY={img ? img.height / 2 : 0}
//     />
//   );
// };

// const Move = () => {
//   const dragUrl = React.useRef();
//   const stageRef = React.useRef();
//   const [images, setImages] = React.useState([]);
//   return (
//     <div>
//       Try to trag and image into the stage:
//       <br />
//       <img
//         alt="lion"
//         src="https://konvajs.org/assets/lion.png"
//         draggable="true"
//         onDragStart={(e) => {
//           dragUrl.current = e.target.src;
//         }}
//         />
//         <Draggable>
//       <div
//         onDrop={(e) => {
//           e.preventDefault();
//           // register event position
//           stageRef.current.setPointersPositions(e);
//           // add image


//           setImages(
//             images.concat([
//               {
//                 ...stageRef.current.getPointerPosition(),
//                 src: dragUrl.current,
//               },
//             ])
//           );
//         }}
//         onDragOver={(e) => e.preventDefault()}
//       >
          
//         <Stage
//           width={window.innerWidth}
//           height={window.innerHeight}
//           style={{ border: '1px solid grey' }}
//           ref={stageRef}
//         >
//           <Layer>
//             {images.map((image) => {
//               return <URLImage image={image} />;
//             })}
//           </Layer>
//         </Stage>
//       </div>

//       </Draggable>

//     </div>
//   );
// };
// export default Move;

import  React , {Component } from 'react'
export default class Tag extends Component {
    
    
    render () {
        return (
            <div>
                
<li>
    id = {this.props.id}
    <br/>
    {this.props.body}
    <br/>
    <button onClick={this.props.delete} >Delete</button>
    <hr/>
             </li>
            </div>
        )


    }
}