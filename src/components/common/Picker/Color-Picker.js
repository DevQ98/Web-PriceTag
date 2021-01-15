import { updateElementAttribute } from 'app/stampSlice';
import reactCSS from 'reactcss';
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
      color: {
        r: '241',
        g: '112',
        b: '19',
        a: '1',
      },
      // color: '#fff',
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
    this.setState({ color: colors.rgb });
  };
  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });
    return (
      <div>
        <button className="fill-color" onClick={this.handleClick}>
          <MdFormatColorFill className="tool-bar__color" />
        </button>
        {this.state.displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
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
