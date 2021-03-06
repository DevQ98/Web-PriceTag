import priceTagApi from 'api/pricetagAPI';
import DownloadLink from 'react-download-link';
import { addElement, setCurrentStamp, updateElementAttribute } from 'app/stampSlice';
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
import { connect } from 'react-redux';
import Select from 'react-select';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { bindActionCreators } from 'redux';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import '../../assets/css/Design.css';
import '../../assets/css/Menu.css';
import ButtonColor from '../../components/common/Picker/Color-Picker';
import FontPicker from '../../components/common/Picker/Font-Picker';
import FontSize from '../../components/common/Picker/Font-Size';
import Menu from '../../components/layout/Menu';
import DesignPage from './DesignPage';
import UndoRedo from './UndoRedo';
// import 'react-toastify';

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
toast.configure();
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

  componentDidMount() {
    if (localStorage.getItem('Price') == null) {
      const newStamp = {
        frame: { width: 100, height: 100 },
        elementList: [],
        name: ' chua co name',
        link: ' chua luu link',
      };
      this.props.setCurrentStamp(newStamp);
    } else {
      const currentStamp = localStorage.getItem('Stamp');
      const newCurrentStamp = JSON.parse(currentStamp);
      if (newCurrentStamp !== null) this.props.setCurrentStamp(newCurrentStamp.current);
      // if (newCurrentStamp !== null) this.props.setCurrentStamp(newCurrentStamp.current);
    }
  }
  getHTML = () => {
    document.getElementById('test');
  };
  isActiveList = (attrName, attrValue) => {
    const activeElementIdxList = this.props.stamp.elementList.reduce((idxList, element, idx) => {
      if (element.isActive) idxList.push(idx);
      return idxList;
    }, []);

    const ListElementIsAttributes = [];
    activeElementIdxList.forEach((elementIdx) => {
      if (this.props.stamp.elementList[elementIdx].attributes) {
        if (this.props.stamp.elementList[elementIdx].attributes[attrName] !== attrValue) {
          ListElementIsAttributes.push(1);
        }
      }
    });
    if (ListElementIsAttributes.length > 0) {
      // eslint-disable-next-line react/no-direct-mutation-state
      this.state.Check = true;
    } else {
      // eslint-disable-next-line react/no-direct-mutation-state
      this.state.Check = false;
    }
  };

  toggleSidebar = (event) => {
    let key = `${event.currentTarget.parentNode.id}Open`;
    this.setState({
      [key]: !this.state[key],
      leftOpen: !this.state.leftOpen,
    });
  };
  handleBorderClick = (event) => {
    this.isActiveList(event.value, 'double');
    if (this.state.Check)
      this.props.updateElementAttribute({
        attrName: event.value,
        attrValue: 'double',
      });
    else
      this.props.updateElementAttribute({
        attrName: event.value,
        attrValue: '',
      });
  };

  handleBoldClick = () => {
    this.isActiveList('fontWeight', 'bold');
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
    this.isActiveList('fontStyle', 'italic');
    if (this.state.Check)
      this.props.updateElementAttribute({
        attrName: 'fontStyle',
        attrValue: 'italic',
      });
    else
      this.props.updateElementAttribute({
        attrName: 'fontStyle',
        attrValue: '',
      });
  };
  handleLineHeightClick = () => {
    this.isActiveList('lineHeight', '2');
    if (this.state.Check)
      this.props.updateElementAttribute({
        attrName: 'lineHeight',
        attrValue: '2',
      });
    else
      this.props.updateElementAttribute({
        attrName: 'lineHeight',
        attrValue: '',
      });
  };
  handleListStyleTypeClick = () => {
    this.props.updateElementAttribute({
      attrName: 'listStyleType',
      attrValue: 'circle',
    });
  };
  handleTextAlignLeftClick = () => {
    this.isActiveList('textAlign', 'left');
    if (this.state.Check)
      this.props.updateElementAttribute({
        attrName: 'textAlign',
        attrValue: 'left',
      });
    else
      this.props.updateElementAttribute({
        attrName: 'textAlign',
        attrValue: '',
      });
  };
  handleTextAlignCenterClick = () => {
    this.isActiveList('textAlign', 'center');
    if (this.state.Check)
      this.props.updateElementAttribute({
        attrName: 'textAlign',
        attrValue: 'center',
      });
    else
      this.props.updateElementAttribute({
        attrName: 'textAlign',
        attrValue: '',
      });
  };
  handleTextAlignRightClick = () => {
    this.isActiveList('textAlign', 'right');
    if (this.state.Check)
      this.props.updateElementAttribute({
        attrName: 'textAlign',
        attrValue: 'right',
      });
    else
      this.props.updateElementAttribute({
        attrName: 'textAlign',
        attrValue: '',
      });
  };
  getDataFromURL = (url) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch(url)
          .then((response) => response.text())
          .then((data) => {
            resolve(data);
          });
      });
    }, 2000);
  handleSaveElement = () => {
    const currentStamp = localStorage.getItem('Price');
    localStorage.setItem('Stamp', currentStamp);
    // const elementListData = elementData.current.elementList;
    // elementListData.forEach((e) => {
    //   try {
    //     elementsAPI.postData({
    //       fontStyle: e.attributes ? e.attributes.fontStyle : null,
    //       fontWeight: e.attributes ? e.attributes.fontWeight : null,
    //       color: e.attributes ? e.attributes.color : null,
    //       name: e.name,
    //       height: e.attributes ? e.attributes.height : null,
    //       width: e.attributes ? e.attributes.width : null,
    //       transform: e.attributes ? e.attributes.transform : null,
    //       borderLeft: e.attributes ? e.attributes.border : null,
    //       pricetagId: 1,
    //     });
    //     toast.info(' Lưu thành công !', { position: toast.POSITION.TOP_RIGHT, autoClose: 1500 });
    //   } catch (error) {
    //     toast.error(' Có lỗi xảy ra !', { position: toast.POSITION.TOP_RIGHT, autoClose: 1500 });
    //   }
    console.log(JSON.stringify(JSON.parse(currentStamp).current));
    const params = JSON.parse(currentStamp).current;
    toast('lưu thành công !', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1500,
    });
    priceTagApi.postAllElement(params);
    // elementsAPI.postData({
    //   fontStyle: 'italic',
    //   fontWeight: 'bold',
    //   color: 'pink',
    //   name: 'Gia san pham',
    //   transform: 'translate(-10px,20px)',
    //   pricetagId: 1,
    // });
    // });
  };

  render() {
    return (
      <div className="design__page">
        <ReactHint autoPosition events delay />
        <div className="design__page" id="left">
          <Menu
            className={` design__menu`}
            visible={this.state.leftOpen ? 'Open' : 'closed'}
            setSides={this.setSide}
          ></Menu>
          <div className={` design__content`}>
            <div className={`btn__sidebar--${this.state.leftOpen} `} onClick={this.toggleSidebar}>
              <div className=" btn__push">
                <IoIosArrowDropleft />
              </div>
            </div>
            <div className=" tool-bar ">
              <UndoRedo />
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
              <div className="design__view-control">
                {/* <DownloadLink label="Download" filename="fileName.html" exportFile={() => {}} /> */}
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
              <div className="design__size-zoom">
                Zoom : 100% | {this.props.stamp == null ? 100 : this.props.stamp.frame.height} x{' '}
                {this.props.stamp == null ? 100 : this.props.stamp.frame.width} mm
              </div>
              <div id="test" className="design__view--bg">
                <DesignPage> </DesignPage>
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
    stamp: state.stamp.present.current,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      onUndo: () => dispatch(UndoActionCreators.undo()),
      setCurrentStamp,
      updateElementAttribute,
      addElement,
    },
    dispatch
  );

const Design = connect(mapStateToProps, mapDispatchToProps)(DesignCom);

export default Design;
