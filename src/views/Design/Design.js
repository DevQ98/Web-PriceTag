import React, { useState, Component } from 'react';
import Menu from '../../components/layout/Menu';
import { FaBorderAll } from "react-icons/fa";
import { AiOutlineAlignRight, AiOutlineAlignLeft, AiOutlineAlignCenter } from "react-icons/ai";
import { FiItalic } from "react-icons/fi";
import { AiOutlineBold } from "react-icons/ai";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { FaListUl } from "react-icons/fa";
import { ImTextHeight } from "react-icons/im";
import { IoArrowRedoSharp } from "react-icons/io5";
import { IoArrowUndoSharp } from "react-icons/io5";
import { IoIosArrowDropleft} from "react-icons/io";
import { Button } from '../../components/common/Button/Button';
import TxtElement from "../../components/common/Draggable/TxtElement"
import FontPicker from "../../components/common/Picker/Font-Picker";
import ButtonExample from '../../components/common/Picker/Color-Picker';
import '../../assets/css/Menu.css';
import FontSize from '../../components/common/Picker/Font-Size';
import NameElement from '../../components/common/Draggable/Name-Element';
import PriceElement from '../../components/common/Draggable/Price-Element';
import BrandElement from '../../components/common/Draggable/Brand-Element';
import DateElement from '../../components/common/Draggable/Date-Element';
import DiscountElement from '../../components/common/Draggable/Discount-Element';
import PromotionElement from '../../components/common/Draggable/Promotion-Element';
import StatusElement from '../../components/common/Draggable/Status-Element';
import Template from '../../components/layout/Template';
import { addSize, ChangeStatusNav } from '../../actions/designAction.js'
import { connect } from 'react-redux';
import DesignPage from './DesignPage';
import ReactHintFactory from 'react-hint';
const ReactHint = ReactHintFactory(React)
class DesignCom extends Component {
    constructor(props) {
        super(props);
        this.postID = 0;
        this.Body = "0";
        this.state = {
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
            isBold: false,
            bold: "bold",
            isItalic: false,
            leftOpen: true,
            isLineLeft: false,
            isLineCenter: true,
            isLineRight: false,
            height: "500",
            width : "350",
            BG :""
        }
    }

    componentDidMount() {
        console.log("11", this.props)
        this.props.ChangeStatusNav(true)

    }

    componentWillReceiveProps(nextProps) {
        if (JSON.stringify(this.props.Info.Designs.changeSize) !== JSON.stringify(nextProps.Info.Designs.changeSize)) {
            this.setState({
                fontSize: nextProps.Info.Designs.changeSize
            })
        }
    }

    onClickBold = (isBold) => {
        this.setState({
            isBold: !this.state.isBold
        })
    }
    onClickItalic = (isItalic) => {
        this.setState({
            isItalic: !this.state.isItalic

        })
    }
    onClickLineLeft = () => {
        this.setState({
            isLineLeft: true

        })
        this.setState({ isLineCenter: false })
        this.setState({ isLineRight: false })
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
    ChangeName()
    {
        console.log("kakka")
    }
    addName = (id ) => {
        this.postID = id;
        this.Body = "Tên Sản phẩm";
        const copyNameArray = Object.assign([], this.state.nameArray);
        copyNameArray.push({
            id: id,
            body: this.Body
        })
        this.setState({
            nameArray: copyNameArray
        })
    }
    addPrice = (id) => {
        this.postID = id;
        this.Body = "Giá Sản Phẩm  "
        const copyPriceArray = Object.assign([], this.state.priceArray);
        copyPriceArray.push({
            id: id,
            body: this.Body
        })
        this.setState({
            priceArray: copyPriceArray
            
        })
        console.log("kaka",this.state.priceArray)
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
        let leftOpen = this.state.leftOpen ? 'open' : 'closed';
        const{priceArray , 
            fontSize,
            color,
            isBold,
            bold,
            isItalic,
            isLineLeft,
            isLineCenter,
            isLineRight ,
            height,
            width,
            nameArray,
            brandArray,
            detailArray,
            dateArray,
            discountArray,
            promotionArray,
            statusArray,
            BG
        } = this.state;
        console.log(BG);
        return (
            
            <div className='design__page'>
             <ReactHint autoPosition events delay />
                <div className='row design__page' id='left'>
                    <div className={` design__menu`}>
                        <Menu visible={this.state.leftOpen ? 'Open' : 'closed'}
                            addTemplate={this.addTemplate.bind(this)}
                            setSides={this.setSide}
                            addName={this.addName.bind(this)}
                            addPrice={this.addPrice.bind(this)}
                            addBrand={this.addBrand.bind(this)}
                            addDetail={this.addDetail.bind(this)}
                            addDate={this.addDate.bind(this)}
                            addDiscount={this.addDiscount.bind(this)}
                            addStatus={this.addStatus.bind(this)}
                            addPromotion={this.addPromotion.bind(this)}
                            addBG={this.addBG.bind(this)}
                        ></Menu>
                    </div>
                    <div className={`btn__sidebar--${this.state.leftOpen} ` } onClick={this.toggleSidebar}  >
                        <div className=" btn__push">
                           <IoIosArrowDropleft />
                        </div>
                       
                    </div>
                    <div className={` design__content--${leftOpen}`}>
                        <div className='row tool-bar justify-content-around'>
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
                            <div className=' tool-bar__item ' onClick={this.onClickBold}>
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
                            <div className=' tool-bar__item'>
                                <FaListUl data-rh="Bullet" data-rh-at="bottom"/>
                            </div>
                            <div className=' tool-bar__item'>
                                <ImTextHeight data-rh="HeightText" data-rh-at="bottom"/>
                            </div>
                            <div className=' tool-bar__item'>
                                <FaBorderAll data-rh="Border" data-rh-at="bottom"/>
                            </div>
                        </div> 
                        <div className ="design__view">
                            <div>
                                <div className=" btn btn__save">
                                    Save
                                </div>
                                <div className= " btn btn__version">
                                    Version
                                </div>
                            </div>
                        <div className="design__view--bg">
                                                         
                              <DesignPage 
                                    nameArray={nameArray}
                                    brandArray={brandArray}
                                    detailArray={detailArray}
                                    dateArray={dateArray}
                                    discountArray={discountArray}
                                    promotionArray={promotionArray}
                                    statusArray={statusArray}
                                    priceArray={priceArray}   
                                    color={color} 
                                    bold={bold} 
                                    fontSize={fontSize}
                                    isItalic={isItalic}
                                    leftOpen={leftOpen}
                                    isLineCenter={isLineCenter}
                                    isLineLeft = {isLineLeft}
                                    isLineRight={isLineRight}
                                    isBold ={isBold}
                                    height={height}
                                    width = {width}
                                    BG={BG}
                                > </DesignPage>
                                
                        </div>                
                        
                        </div>                    
                    </div>
                </div>
            </div>
        )
    }
}
/* <div>
                                   {                                    
                                       this.state.templateArray.map((tag , index) =>{
                                           return(        
                                               <Template
                                                  
                                               />    
                                           )
                                       })  
                                   }
                           </div> */


const mapStateToProps = state => {
    return {
        Info: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addSize: changeSize => {
            dispatch(addSize(changeSize));
        },
        ChangeStatusNav: status => {
            dispatch(ChangeStatusNav(status));
        },
    };
};

const Design = connect(mapStateToProps, mapDispatchToProps)(DesignCom);

export default Design
