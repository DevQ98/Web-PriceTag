import { updateElementAttribute } from 'app/stampSlice';
import React from 'react';
import { SketchPicker } from 'react-color';
import { MdFormatColorFill } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../../assets/css/Menu.css';

class ButtonColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      color: '#fff',
    };
  }
  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };
  handleChangeColor = (colors) => {
    this.props.updateElementAttribute({
      attrName: 'color',
      attrValue: colors.hex,
    });
  };
  render() {
    const popover = {
      position: 'absolute',
      zIndex: '2',
    };
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    };
    return (
      <div>
        <button className="fill-color" onClick={this.handleClick}>
          <MdFormatColorFill className="tool-bar__color" />
        </button>
        {this.state.displayColorPicker ? (
          <div style={popover}>
            <div style={cover} onClick={this.handleClose} />
            <SketchPicker color={this.state.color} onChange={this.handleChangeColor} />
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      updateElementAttribute,
    },
    dispatch
  );

export default ButtonColor = connect(mapStateToProps, mapDispatchToProps)(ButtonColor);
