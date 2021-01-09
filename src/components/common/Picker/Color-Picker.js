import React from 'react'
import { SketchPicker  } from 'react-color'
import {MdFormatColorFill} from "react-icons/md";
import { changeColor } from  '../../../actions/designAction'
import {Price} from '../../../reducers/Price'
import { connect } from 'react-redux';
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
  };  handleChange = (colors) => {
    this.props.changeColor( );
  };

  handleChange = (colors) => {
    this.props.changeColor( this.props.isActive ,colors.hex )
  }  
  
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
        <button  className='fill-color' onClick={ this.handleClick }><MdFormatColorFill className="tool-bar__color"/></button>
        { this.state.displayColorPicker ? <div style={ popover }>
          <div style={ cover } onClick={ this.handleClose }/>
          <SketchPicker color={ this.state.color }  onChange={this.handleChange }  />
        </div> : null }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      Price : state.Price,
  }
}

const mapDispatchToProps = dispatch => {
  return {

      changeColor : (id , transform) =>{
          dispatch(changeColor(id , transform))
      },
  };
};

export default ButtonExample = connect(mapStateToProps, mapDispatchToProps)(ButtonExample);