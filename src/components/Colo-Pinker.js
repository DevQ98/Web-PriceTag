import React ,{useState}from "react";
import "./styles.css";
import { SketchPicker } from 'react-color';
export default function App() {
  const [color, setColor] = useState('#ff0000');
  return (
    <div className="App">
      <SketchPicker
      color={color}
      onChangeComplete={ (color)=> {setColor(color.hex)}}
      />
      <div style={{
        color
        // backgroundColor : color,
        // transition : 'ease all 500ms',
        }}>
        Hi MAMA
      </div>
    </div>
    
  );
}