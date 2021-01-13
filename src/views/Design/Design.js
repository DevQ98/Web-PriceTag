import { updateElementAttribute, setCurrentStamp, addElement } from 'app/stampSlice';
import React, { Component } from 'react';
import ReactHintFactory from 'react-hint';
import {
  AiOutlineAlignCenter,
  AiOutlineAlignLeft,
  AiOutlineAlignRight,
  AiOutlineBold,
  AiOutlineBorderBottom,
  AiOutlineBorderLeft,
  AiOutlineBorderRight,
  AiOutlineBorderTop,
} from 'react-icons/ai';
import { FaBorderAll, FaListUl } from 'react-icons/fa';
import { FiItalic } from 'react-icons/fi';
import { ImTextHeight } from 'react-icons/im';
import { IoIosArrowDropleft } from 'react-icons/io';
import { IoArrowRedoSharp, IoArrowUndoSharp } from 'react-icons/io5';
import { connect } from 'react-redux';
import Select from 'react-select';
import { bindActionCreators } from 'redux';
import '../../assets/css/Design.css';
import '../../assets/css/Menu.css';
import ButtonColor from '../../components/common/Picker/Color-Picker';
import FontPicker from '../../components/common/Picker/Font-Picker';
import FontSize from '../../components/common/Picker/Font-Size';
import Menu from '../../components/layout/Menu';
import DesignPage from './DesignPage';
import elementsAPI from '../../api/elementsAPI';

const options = [
  { value: '1', label: '142784_IphoneTem_V1' },
  { value: '2', label: '142784_IphoneTem_V2' },
  { value: '3', label: '142784_IphoneTem_V3' },
  { value: '4', label: '142784_IphoneTem_V4' },
  { value: '5', label: '142784_IphoneTem_V5' },
  { value: '6', label: '142784_IphoneTem_V6' },
];
const border = [
  { value: 'borderLeft', label: <AiOutlineBorderLeft /> },
  { value: 'borderRight', label: <AiOutlineBorderRight /> },
  { value: 'borderBottom', label: <AiOutlineBorderBottom /> },
  { value: 'borderTop', label: <AiOutlineBorderTop /> },
];
const ReactHint = ReactHintFactory(React);
class DesignCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BG: '',
      Check: '',
    };
  }
  setSide = (side) => {
    this.setState({
      leftOpen: side,
    });
  };
  componentDidMount() {}
  //   deleteEvent = (index) => {
  //     const copyNameArray = Object.assign([], this.state.nameArray);
  //     copyNameArray.splice(index, 1);

  //     this.setState({
  //       nameArray: copyNameArray,
  //     });
  //   };

  isActiveList = (attrName, attrValue) => {
    const activeElementIdxList = this.props.stamp.elementList.reduce((idxList, element, idx) => {
      if (element.isActive) idxList.push(idx);

      return idxList;
    }, []);

    const ListElementIsAttributes = [];
    activeElementIdxList.forEach((elementIdx) => {
      const elementAttributes = this.props.stamp.elementList[elementIdx].attributes;
      if (this.props.stamp.elementList[elementIdx].attributes) {
        console.log(this.props.stamp.elementList[elementIdx].attributes, 'isTrue');
        if (this.props.stamp.elementList[elementIdx].attributes[attrName] != attrValue) {
          ListElementIsAttributes.push(1);
          console.log(ListElementIsAttributes, ' Check');
        }
      }
    });
    if (ListElementIsAttributes.length > 0) {
      this.state.Check = true;
    } else {
      this.state.Check = false;
    }
    console.log(this.state.Check, ' Check');
  };

  changeBorder(event) {}
  toggleSidebar = (event) => {
    let key = `${event.currentTarget.parentNode.id}Open`;
    this.setState({
      [key]: !this.state[key],
      leftOpen: !this.state.leftOpen,
    });
  };
  handleBorderClick = (event) => {
    this.props.updateElementAttribute({
      attrName: event.value,
      attrValue: 'double',
    });
  };

  handleBoldClick = () => {
    this.isActiveList('fontWeight', 'bold');
    console.log('isTrue', this.state.Check);
    if (this.state.Check)
      this.props.updateElementAttribute({
        attrName: 'fontWeight',
        attrValue: 'bold',
      });
    else
      this.props.updateElementAttribute({
        attrName: 'fontWeight',
        attrValue: '',
      });
  };
  handleItalicClick = () => {
    this.props.updateElementAttribute({
      attrName: 'fontStyle',
      attrValue: 'italic',
    });
  };
  handleLineHeightClick = () => {
    this.props.updateElementAttribute({
      attrName: 'lineHeight',
      attrValue: '2',
    });
  };
  handleListStyleTypeClick = () => {
    this.props.updateElementAttribute({
      attrName: 'listStyleType',
      attrValue: 'circle',
    });
  };
  handleTextAlignLeftClick = () => {
    this.props.updateElementAttribute({
      attrName: 'textAlign',
      attrValue: 'left',
    });
  };
  handleTextAlignCenterClick = () => {
    this.props.updateElementAttribute({
      attrName: 'textAlign',
      attrValue: 'center',
    });
  };
  handleTextAlignRightClick = () => {
    this.props.updateElementAttribute({
      attrName: 'textAlign',
      attrValue: 'right',
    });
  };

  handleSaveElement = () => {
    localStorage.getItem('Price');
    console.log(localStorage.getItem('Price'));
    elementsAPI.postAllElement();
  };

  render() {
    console.log(this.props, 'prop of design');
    const { Price } = this.props;
    let leftOpen = this.state.leftOpen ? 'open' : 'closed';
    return (
      <div className="design__page">
        <ReactHint autoPosition events delay />
        <div className="row design__page" id="left">
          <Menu
            className={` design__menu`}
            visible={this.state.leftOpen ? 'Open' : 'closed'}
            setSides={this.setSide}
          ></Menu>

          <div className={`btn__sidebar--${this.state.leftOpen} `} onClick={this.toggleSidebar}>
            <div className=" btn__push">
              <IoIosArrowDropleft />
            </div>
          </div>
          <div className={` design__content--${leftOpen}`}>
            <div className=" tool-bar ">
              <div className=" tool-bar__item">
                <IoArrowUndoSharp data-rh="Undo" data-rh-at="bottom" />
              </div>
              <div className=" tool-bar__item">
                <IoArrowRedoSharp data-rh="Redo" data-rh-at="bottom" />
              </div>
              <div className=" tool-bar__font">
                <FontPicker> </FontPicker>
              </div>
              <div className=" tool-bar__size">
                <FontSize />
              </div>
              <div className=" tool-bar__item " onClick={this.handleBoldClick}>
                <AiOutlineBold data-rh="Bold" data-rh-at="bottom" />
              </div>
              <div className=" tool-bar__item" onClick={this.handleItalicClick}>
                <FiItalic data-rh="Italic" data-rh-at="bottom" />
              </div>
              <div className=" tool-bar__item">
                <ButtonColor data-rh="Fill Color" data-rh-at="bottom"></ButtonColor>
              </div>
              <div className=" tool-bar__item" onClick={this.handleTextAlignLeftClick}>
                <AiOutlineAlignLeft data-rh="AlignLeft" data-rh-at="bottom" />
              </div>
              <div className=" tool-bar__item" onClick={this.handleTextAlignCenterClick}>
                <AiOutlineAlignCenter data-rh="AlignCenter" data-rh-at="bottom" />
              </div>
              <div className=" tool-bar__item" onClick={this.handleTextAlignRightClick}>
                <AiOutlineAlignRight data-rh="AlignRight" data-rh-at="bottom" />
              </div>
              <div className=" tool-bar__item" onClick={this.handleListStyleTypeClick}>
                <FaListUl data-rh="Bullet" data-rh-at="bottom" />
              </div>
              <div className=" tool-bar__item" onClick={this.handleLineHeightClick}>
                <ImTextHeight data-rh="HeightText" data-rh-at="bottom" />
              </div>
              <section className=" tool-bar__item" data-rh="Border" data-rh-at="bottom">
                <Select
                  classNamePrefix="Font"
                  className="cb_border"
                  onChange={this.handleBorderClick}
                  options={border}
                  placeholder={<FaBorderAll />}
                />
              </section>
            </div>
            <div className="design__view">
              <div>
                <div className=" btn btn__save" onClick={this.handleSaveElement}>
                  Save
                </div>
                <section>
                  <Select
                    classNamePrefix="Font"
                    className="cb_version"
                    options={options}
                    placeholder="142784_IphoneTem_Now"
                  />
                </section>
              </div>
              {/* <div className='design__size-zoom'>Zoom : 100% | {this.state.height} x { this.state.width}</div> */}
              <div className="design__view--bg">
                <DesignPage> </DesignPage>
                {/* <div className="elements selecto-area items-template " style={{height: '500mm', width: '300mm'}}><div className="items-element apply-font cube target" id="4.049045638421966" style={{fontWeight: 'bold', fontStyle: 'italic'}}>Gia San Pham</div><div className="items-element apply-font cube target" id="80.5723268226495" style={{fontStyle: 'italic', fontWeight: 'bold'}}>Gia San Pham</div><div className="items-element apply-font cube target" id="7.65505840659555" style={{fontStyle: 'italic'}}>Gia San Pham</div><div className="items-element apply-font cube target" id="71.37352728387103" style={{fontWeight: 'bold'}}>Ten San Pham</div></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stamp: state.stamp.current,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setCurrentStamp,
      updateElementAttribute,
      addElement,
    },
    dispatch
  );

const Design = connect(mapStateToProps, mapDispatchToProps)(DesignCom);

export default Design;
