import React, {  Component } from 'react';
import { FaBorderAll ,FaListUl } from "react-icons/fa";
import { AiOutlineAlignRight, AiOutlineAlignLeft, AiOutlineAlignCenter  ,AiOutlineBold 
    , AiOutlineBorderBottom,AiOutlineBorderLeft,AiOutlineBorderRight,AiOutlineBorderTop} from "react-icons/ai";
import { FiItalic } from "react-icons/fi";
import { ImTextHeight } from "react-icons/im";
import { IoArrowRedoSharp , IoArrowUndoSharp} from "react-icons/io5";
import { IoIosArrowDropleft} from "react-icons/io";

import FontPicker from "../../components/common/Picker/Font-Picker";
import ButtonExample from '../../components/common/Picker/Color-Picker';

import FontSize from '../../components/common/Picker/Font-Size';

import {  changeLineHeight , changeBullet,changeBold , changeItalic, saveTem  , changeAlignLeft,changeAlignCenter,changeAlignRight} from '../../actions/designAction.js'
import { connect } from 'react-redux';
import Menu from '../../components/layout/Menu';
import DesignPage from './DesignPage';
import ReactHintFactory from 'react-hint';
import Select from 'react-select';
import '../../assets/css/Menu.css';
import '../../assets/css/Design.css';

const options = [
    { value: '1', label: '142784_IphoneTem_V1' },
    { value: '2', label: '142784_IphoneTem_V2' },
    { value: '3', label: '142784_IphoneTem_V3' },
    { value: '4', label: '142784_IphoneTem_V4' },
    { value: '5', label: '142784_IphoneTem_V5' },
    { value: '6', label: '142784_IphoneTem_V6' }
]
const border = [
    { value: '1', label: <AiOutlineBorderLeft/> },
    { value: '2', label: <AiOutlineBorderRight/> },
    { value: '3', label: <AiOutlineBorderBottom/> },
    { value: '4', label: <AiOutlineBorderTop/> },

]
const ReactHint = ReactHintFactory(React)
class DesignCom extends Component {
    constructor(props) {
        super(props);
        this.postID = 0;
        this.Body = "0";
        this.state = {
            Bigarray :[],
            nameArray: [
            ],
            priceArray: [
            ],
            brandArray: [
            ],
            detailArray: [
            ],
            dateArray: [],
            discountArray: [],
            promotionArray: [
            ],
            statusArray: [
            ],
            templateArray: [],
            fontSize: 16,
            color: "#333",
            isItalic: false,
            leftOpen: true,
            isLineLeft: false,
            isLineCenter: true,
            isLineRight: false,
            height: "500",
            width : "300",
            BG :"",
            border : "",
            isHeightText: true,
            isBullet : false
        }
    }
    onClickHeightText = (isHeightText) => {
        this.setState({
            isHeightText: !this.state.isHeightText

        })
    }
    onClickHeightText = (isHeightText) => {
        this.setState({
            isHeightText: !this.state.isHeightText

        })
        console.log('heightss ' ,isHeightText)
    }
    onClickBullet =(isBullet) =>{
        this.setState({
            isBullet: !this.state.isBullet

        })
    }
    setColor = (colors) => {
        this.setState({
            color: colors

        });
    }
    setSide = (side) => {
        this.setState({
            leftOpen: side
        })
    }
    setSize = (sizes) => {
        this.setState({
            fontSize: sizes
        });
    }
    deleteEvent = (index) => {
        const copyNameArray = Object.assign([], this.state.nameArray);
        copyNameArray.splice(index, 1);

        this.setState({
            nameArray: copyNameArray
        })
    }

    addTemplate = (h , w) => {

        this.setState({
            height :h,
            width : w
        })
    }
    addBG = (colors) => {

        this.setState({
            BG: colors
        })
    }

    changeBorder(event) {

    }
    toggleSidebar = (event) => {
        let key = `${event.currentTarget.parentNode.id}Open`;
        this.setState({
            [key]: !this.state[key],
            leftOpen: !this.state.leftOpen
        });
    }

    onChangeFontSize(sizes) {
        this.setState({
            fontSize: sizes
        })
    }

    render() {
        console.log(this.props , "prop of design")
        const { changeBold , Price , changeItalic   ,changeLineHeight , changeBullet,
             changeAlignLeft ,changeAlignCenter,changeAlignRight, saveTem } = this.props
        let leftOpen = this.state.leftOpen ? 'open' : 'closed';
        const { height , width} = this.state
        return (
            
            <div className='design__page'>
             <ReactHint autoPosition events delay />
                <div className='row design__page' id='left'>

                        <Menu className={` design__menu`} visible={this.state.leftOpen ? 'Open' : 'closed'}
                            addTemplate={this.addTemplate.bind(this)}
                            setSides={this.setSide}
                            addBG={this.addBG.bind(this)}
                        ></Menu>

                    <div className={`btn__sidebar--${this.state.leftOpen} ` } onClick={this.toggleSidebar}  >
                        <div className=" btn__push">
                           <IoIosArrowDropleft />
                        </div>
                       
                    </div>
                    <div className={` design__content--${leftOpen}`}>
                        <div className=' tool-bar '>
                            <div className=' tool-bar__item'>
                                <IoArrowUndoSharp data-rh="Undo" data-rh-at="bottom" />
                            </div>
                            <div className=' tool-bar__item'>
                                <IoArrowRedoSharp data-rh="Redo" data-rh-at="bottom"/>
                            </div>
                            <div className=' tool-bar__font'>
                                <FontPicker> </FontPicker>
                            </div>
                            <div className=' tool-bar__size'>
                                <FontSize
                                    setSizes={this.setSize}
                                    onChange={this.onChangeFontSize.bind(this)}
                                />
                            </div>
                            <div className=' tool-bar__item ' onClick={() =>changeBold(Price.isActive)}>
                                <AiOutlineBold data-rh="Bold" data-rh-at="bottom"/>
                            </div>
                            <div className=' tool-bar__item' onClick={()=> changeItalic(Price.isActive)}>
                                <FiItalic data-rh="Italic" data-rh-at="bottom"/>
                            </div>
                            <div className=' tool-bar__item'>
                                <ButtonExample data-rh="Fill Color" data-rh-at="bottom" setColors={this.setColor}></ButtonExample>
                            </div>
                            <div className=' tool-bar__item' onClick={()=> changeAlignLeft(Price.isActive)}>
                                <AiOutlineAlignLeft data-rh="AlignLeft" data-rh-at="bottom"/>
                            </div>
                            <div className=' tool-bar__item' onClick={()=> changeAlignCenter(Price.isActive)}>
                                <AiOutlineAlignCenter data-rh="AlignCenter" data-rh-at="bottom"/>
                            </div>
                            <div className=' tool-bar__item' onClick={()=> changeAlignRight(Price.isActive)}>
                                <AiOutlineAlignRight data-rh="AlignRight" data-rh-at="bottom"/>
                            </div>
                            <div className=' tool-bar__item' onClick={()=> changeBullet(Price.isActive)}>
                                <FaListUl data-rh="Bullet" data-rh-at="bottom"/>
                            </div>
                            <div className=' tool-bar__item' onClick={()=> changeLineHeight(Price.isActive)}>
                                <ImTextHeight data-rh="HeightText" data-rh-at="bottom"/>
                            </div>
                            <section  className=' tool-bar__item' data-rh="Border" data-rh-at="bottom">
                                    <Select classNamePrefix="Font" className='cb_border' onChange={this.changeBorder(this)}
                                     options={border} placeholder={ <FaBorderAll />} />
                            </section>
                        </div> 
                        <div className ="design__view">
                            <div>
                                <div className=" btn btn__save" onClick={() => saveTem( 1 , ) } >
                                    Save
                                </div>
                                <section >
                                    <Select classNamePrefix="Font" className='cb_version'
                                     options={options} placeholder="142784_IphoneTem_Now" />
                                </section>
                            </div>
                            <div className='design__size-zoom'>Zoom : 100% | {this.state.height} x { this.state.width}</div>
                        <div className="design__view--bg">         
                              <DesignPage 
                                    Price = {Price}
                                    height = {height}
                                    width = {width}
                                > </DesignPage>
                            {/* <div className="elements selecto-area items-template " style={{height: '500mm', width: '300mm'}}><div className="items-element apply-font cube target" id="4.049045638421966" style={{fontWeight: 'bold', fontStyle: 'italic'}}>Gia San Pham</div><div className="items-element apply-font cube target" id="80.5723268226495" style={{fontStyle: 'italic', fontWeight: 'bold'}}>Gia San Pham</div><div className="items-element apply-font cube target" id="7.65505840659555" style={{fontStyle: 'italic'}}>Gia San Pham</div><div className="items-element apply-font cube target" id="71.37352728387103" style={{fontWeight: 'bold'}}>Ten San Pham</div></div> */}
      
                            </div>                
                        </div>                    
                    </div>
                </div>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
       Price : state.Price,
       Tem : state.Tem
    }
}

const mapDispatchToProps = dispatch => {
    return {
    
        changeBold : id  => {
            dispatch(changeBold(id ))
        },
        changeItalic : id => {
            dispatch(changeItalic(id))
        },
        changeAlignLeft : id => {
            dispatch(changeAlignLeft(id))
        },
        changeAlignCenter : id => {
            dispatch(changeAlignCenter(id))
        },
        changeAlignRight : id => {
            dispatch(changeAlignRight(id))
        },
        changeBullet : id => {
            dispatch(changeBullet(id))
        },
        changeLineHeight : id => {
            dispatch(changeLineHeight(id))
        },
        saveTem : (id , html) => {
            dispatch(saveTem(id , html))
        }

       
    };
};

const Design = connect(mapStateToProps, mapDispatchToProps)(DesignCom);

export default Design
