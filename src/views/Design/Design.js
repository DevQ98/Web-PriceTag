import React, { useState, Component } from 'react';
import Menu from '../../components/layout/Menu';
import { FaBorderAll } from "react-icons/fa";
import { AiOutlineAlignRight, AiOutlineAlignLeft, AiOutlineAlignCenter } from "react-icons/ai";
import { FiItalic } from "react-icons/fi";
import { AiOutlineBold } from "react-icons/ai";
import { IoIosSave } from "react-icons/io";
import { FaListUl } from "react-icons/fa";
import { ImTextHeight } from "react-icons/im";
import { IoArrowRedoOutline } from "react-icons/io5";
import { IoArrowUndoOutline } from "react-icons/io5";
import { Button } from '../../components/common/Button/Button';

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
            isBold: true,
            bold: "bold",
            isItalic: true,
            leftOpen: true,
            isLineLeft: false,
            isLineCenter: false,
            isLineRight: false,

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

    addTemplate = (id) => {
        this.postID = id;
        const copyTemplateArray = Object.assign([], this.state.templateArray);
        copyTemplateArray.push({
            id: id,
            body: this.Body
        })
        this.setState({
            templateArray: copyTemplateArray
        })
    }

    addName = (id) => {
        this.postID = id;
        this.Body = " Tên Sản Phẩm"
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
        const copyDiscountArray = Object.assign([], this.state.discountArray);
        copyDiscountArray.push({
            id: id,
            body: this.Body
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
        console.log(this.state.leftOpen)
    }

    onChangeFontSize(sizes) {
        this.setState({
            fontSize: sizes
        })
    }

    render() {

        const { postArray } = this.state;
        let leftOpen = this.state.leftOpen ? 'open' : 'closed';

        return (
            <div className='design-context'>
                <div className='row' id='left'>
                    <div className={`col sidebar-${leftOpen}`}>


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
                        ></Menu>

                    </div>
                    <div className="btn-sidebar" onClick={this.toggleSidebar} >O</div>
                    <div className='col menu-content'>
                        <div className='row tool-bar justify-content-around'>
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
                                <AiOutlineBold />
                            </div>
                            <div className=' tool-bar__item' onClick={this.onClickItalic}>
                                <FiItalic />
                            </div>
                            <div className=' tool-bar__item'>
                                <ButtonExample setColors={this.setColor}></ButtonExample>
                            </div>

                            <div className=' tool-bar__item' onClick={this.onClickLineLeft}>
                                <AiOutlineAlignLeft />
                            </div>
                            <div className=' tool-bar__item' onClick={this.onClickLineCenter}>
                                <AiOutlineAlignCenter />
                            </div>
                            <div className=' tool-bar__item' onClick={this.onClickLineRight}>
                                <AiOutlineAlignRight />
                            </div>
                            <div className=' tool-bar__item'>
                                <FaListUl />
                            </div>
                            <div className=' tool-bar__item'>
                                <ImTextHeight />
                            </div>
                            <div className=' tool-bar__item'>
                                <FaBorderAll />
                            </div>
                        </div>
                        <div className='row design'>
                            <div className="">
                                <div className="items-template">
                                    <div className="container " style={{ height: 800, width: 2600, marginTop: 100 }}>

                                        {
                                            this.state.nameArray.map((tag, index) => {
                                                return (
                                                    <NameElement
                                                        key={index}
                                                        id={tag.id}
                                                        body={tag.body}
                                                        delete={this.deleteEvent.bind(this.index)}
                                                        color={this.state.color}
                                                        fontSize={this.state.fontSize}
                                                        bold={this.state.isBold ? 'bold' : 'normal'}
                                                        italic={this.state.isItalic ? 'italic' : 'normal'}
                                                        lineleft={this.state.isLineLeft ? 'left' : '!left'}
                                                        linecenter={this.state.isLineCenter ? 'center' : '!center'}
                                                        lineright={this.state.isLineRight ? 'right' : '!right'}
                                                    />
                                                )
                                            })
                                        }

                                    </div>
                                    <div>
                                        {
                                            this.state.priceArray.map((tag, index) => {
                                                return (
                                                    <PriceElement
                                                        key={index}
                                                        id={tag.id}
                                                        body={tag.body}
                                                        delete={this.deleteEvent.bind(this.index)}
                                                        color={this.state.color}
                                                        fontSize={this.state.fontSize}
                                                        bold={this.state.isBold ? 'bold' : 'normal'}
                                                        italic={this.state.isItalic ? 'italic' : 'normal'}

                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                    <div>
                                        {
                                            this.state.brandArray.map((tag, index) => {
                                                return (
                                                    <BrandElement
                                                        key={index}
                                                        id={tag.id}
                                                        body={tag.body}
                                                        delete={this.deleteEvent.bind(this.index)}
                                                        color={this.state.color}
                                                        fontSize={this.state.fontSize}
                                                        bold={this.state.isBold ? 'bold' : 'normal'}
                                                        italic={this.state.isItalic ? 'italic' : 'normal'}
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                    <div>
                                        {
                                            this.state.dateArray.map((tag, index) => {
                                                return (
                                                    <DateElement
                                                        key={index}
                                                        id={tag.id}
                                                        body={tag.body}
                                                        delete={this.deleteEvent.bind(this.index)}
                                                        color={this.state.color}
                                                        fontSize={this.state.fontSize}
                                                        bold={this.state.isBold ? 'bold' : 'normal'}
                                                        italic={this.state.isItalic ? 'italic' : 'normal'}
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                    <div>
                                        {
                                            this.state.discountArray.map((tag, index) => {
                                                return (
                                                    <DiscountElement
                                                        key={index}
                                                        id={tag.id}
                                                        body={tag.body}
                                                        delete={this.deleteEvent.bind(this.index)}
                                                        color={this.state.color}
                                                        fontSize={this.state.fontSize}
                                                        bold={this.state.isBold ? 'bold' : 'normal'}
                                                        italic={this.state.isItalic ? 'italic' : 'normal'}
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                    <div>
                                        {
                                            this.state.promotionArray.map((tag, index) => {
                                                return (
                                                    <PromotionElement
                                                        key={index}
                                                        id={tag.id}
                                                        body={tag.body}
                                                        delete={this.deleteEvent.bind(this.index)}
                                                        color={this.state.color}
                                                        fontSize={this.state.fontSize}
                                                        bold={this.state.isBold ? 'bold' : 'normal'}
                                                        italic={this.state.isItalic ? 'italic' : 'normal'}
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                    <div>
                                        {
                                            this.state.statusArray.map((tag, index) => {
                                                return (
                                                    <StatusElement
                                                        key={index}
                                                        id={tag.id}
                                                        body={tag.body}
                                                        delete={this.deleteEvent.bind(this.index)}
                                                        color={this.state.color}
                                                        fontSize={this.state.fontSize}
                                                        bold={this.state.isBold ? 'bold' : 'normal'}
                                                        italic={this.state.isItalic ? 'italic' : 'normal'}
                                                    />
                                                )
                                            })
                                        }
                                    </div>

                                </div>
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
