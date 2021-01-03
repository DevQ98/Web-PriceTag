import React, { useState, Component } from 'react';
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

import { addPrice, changeBold , addName } from '../../actions/designAction.js'
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

    onClickItalic = (isItalic) => {
        this.setState({
            isItalic: !this.state.isItalic

        })
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
    onClickLineLeft = () => {
        this.setState({
            isLineLeft: true

        })
        this.setState({ isLineCenter: false })
        this.setState({ isLineRight: false })
    }
    onClickBullet =(isBullet) =>{
        this.setState({
            isBullet: !this.state.isBullet

        })
    }
    onClickLineCenter = () => {
        this.setState({
            isLineCenter: true
        })
        this.setState({ isLineLeft: false })
        this.setState({ isLineRight: false })
    }
    onClickLineRight = () => {
        this.setState({
            isLineRight: true
        })
        this.setState({ isLineCenter: false })
        this.setState({ isLineLeft: false })
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

    addBrand = (id) => {
        this.postID = id;
        this.Body = "Nhà sản xuất "
        const copyBrandArray = Object.assign([], this.state.brandArray);
        copyBrandArray.push({
            id: id,
            body: this.Body
        })
        this.setState({
            brandArray: copyBrandArray
        })
    }
    addDetail = (id) => {
        this.postID = id;
        this.Body = "Chi tiết sản phẩm "
        const copyDetailArray = Object.assign([], this.state.detailArray);
        copyDetailArray.push({
            id: id,
            body: this.Body
        })
        this.setState({
            detailArray: copyDetailArray
        })
    }
    addDate = (id) => {
        this.postID = id;
        this.Body = "Ngày in "
        const copyDateArray = Object.assign([], this.state.dateArray);
        copyDateArray.push({
            id: id,
            body: this.Body
        })
        this.setState({
            dateArray: copyDateArray
        })
    }
    addDiscount = (id) => {
        this.postID = id;
        this.Body = "Giá đã được giảm "     
        this.FontSize= 12
        const copyDiscountArray = Object.assign([], this.state.discountArray);
        copyDiscountArray.push({
            id: id,
            body: this.Body,
            fontSize: this.FontSize
        })
        this.setState({
            discountArray: copyDiscountArray
        })
    }
    addStatus = (id) => {
        this.postID = id;
        this.Body = "Trang thái sản phẩm "
        const copyStatusArray = Object.assign([], this.state.statusArray);
        copyStatusArray.push({
            id: id,
            body: this.Body
        })
        this.setState({
            statusArray: copyStatusArray
        })
    }
    addPromotion = (id) => {
        this.postID = id;
        this.Body = "Chương trình khuyến mãi"
        const copyPromotionArray = Object.assign([], this.state.promotionArray);
        copyPromotionArray.push({
            id: id,
            body: this.Body
        })
        this.setState({
            promotionArray: copyPromotionArray
        })
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
        const { addPrice , changeBold , Price , addName , Name } = this.props
        let leftOpen = this.state.leftOpen ? 'open' : 'closed';
        const { height , width} = this.state
        return (
            
            <div className='design__page'>
             <ReactHint autoPosition events delay />
                <div className='row design__page' id='left'>

                        <Menu className={` design__menu`} visible={this.state.leftOpen ? 'Open' : 'closed'}
                            addTemplate={this.addTemplate.bind(this)}
                            setSides={this.setSide}
                            addBrand={this.addBrand.bind(this)}
                            addDetail={this.addDetail.bind(this)}
                            addDate={this.addDate.bind(this)}
                            addDiscount={this.addDiscount.bind(this)}
                            addStatus={this.addStatus.bind(this)}
                            addPromotion={this.addPromotion.bind(this)}
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
                            <div className=' tool-bar__item' onClick={this.onClickItalic}>
                                <FiItalic data-rh="Italic" data-rh-at="bottom"/>
                            </div>
                            <div className=' tool-bar__item'>
                                <ButtonExample data-rh="Fill Color" data-rh-at="bottom" setColors={this.setColor}></ButtonExample>
                            </div>
                            <div className=' tool-bar__item' onClick={this.onClickLineLeft}>
                                <AiOutlineAlignLeft data-rh="AlignLeft" data-rh-at="bottom"/>
                            </div>
                            <div className=' tool-bar__item' onClick={this.onClickLineCenter}>
                                <AiOutlineAlignCenter data-rh="AlignCenter" data-rh-at="bottom"/>
                            </div>
                            <div className=' tool-bar__item' onClick={this.onClickLineRight}>
                                <AiOutlineAlignRight data-rh="AlignRight" data-rh-at="bottom"/>
                            </div>
                            <div className=' tool-bar__item' onClick={this.onClickBullet}>
                                <FaListUl data-rh="Bullet" data-rh-at="bottom"/>
                            </div>
                            <div className=' tool-bar__item' onClick={this.onClickHeightText}>
                                <ImTextHeight data-rh="HeightText" data-rh-at="bottom"/>
                            </div>
                            <section  className=' tool-bar__item' data-rh="Border" data-rh-at="bottom">
                                    <Select classNamePrefix="Font" className='cb_border' onChange={this.changeBorder(this)}
                                     options={border} placeholder={ <FaBorderAll />} />
                            </section>
                        </div> 
                        <div className ="design__view">
                            <div>
                                <div className=" btn btn__save">
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
                                    addPrice = {Price}
                                    addName = {addName}
                                    changeBold = {changeBold}
                                    height = {height}
                                    width = {width}
                                > </DesignPage>
                                
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
       Name : state.Name
    }
}

const mapDispatchToProps = dispatch => {
    return {
    
        addPrice :  (id , body , fontWeight) => {
            dispatch(addPrice( id , body , fontWeight))
        },
        addName :  (id , body , fontWeight) => {
            dispatch(addName( id , body , fontWeight))
        },
        changeBold : id  => {
            dispatch(changeBold(id ))
        },
       
    };
};

const Design = connect(mapStateToProps, mapDispatchToProps)(DesignCom);

export default Design
