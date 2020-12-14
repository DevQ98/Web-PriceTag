import React from 'react'
import { SketchPicker  } from 'react-color'
import {MdFormatColorFill} from "react-icons/md";
import '../../../assets/css/Menu.css';
class ButtonExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayColorPicker: false,
      color: '#fff',
    }
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };
  handleChange = (colors) => {
    console.log("color",colors)
    this.setState({ 
      color: colors.hex
    });
    this.props.setColors(colors.hex)
  }
  c
  render() {
    const popover = {
      position: 'absolute',
      zIndex: '2',
    }
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    }
    return (
      <div>
        <button  className='fill-color' onClick={ this.handleClick }><MdFormatColorFill className="svg"/></button>
        { this.state.displayColorPicker ? <div style={ popover }>
          <div style={ cover } onClick={ this.handleClose }/>
          <SketchPicker color={ this.state.color }  onChange={ this.handleChange.bind(this) }  />
        </div> : null }
      </div>
    )
  }
}

export default ButtonExample