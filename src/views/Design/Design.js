import React, { useState, Component } from 'react';
import Menu from '../../components/layout/Menu';
import { FaBorderAll } from "react-icons/fa";
import { GrTextAlignLeft } from "react-icons/gr";
import { FiItalic } from "react-icons/fi";
import { AiOutlineBold } from "react-icons/ai";
import { FaListUl } from "react-icons/fa";
import { ImTextHeight } from "react-icons/im";
import FontPicker from "../../components/common/Picker/Font-Picker";
import ButtonExample from '../../components/common/Picker/Color-Picker';
import '../../assets/css/Menu.css';
import FontSize from '../../components/common/Picker/Font-Size';
import NameElement from '../../components/common/Draggable/Name-Element';
import PriceElement from '../../components/common/Draggable/Price-Element';

export default class Design extends Component {
    constructor(props) {
        super(props);
        this.postID = 0;
        this.Body = "0";
        this.state = {
            postArray: [
            ],
            cartArray: [
            ],
            fontSize: 16,
            color: "#333",
            isBold: true,
            bold : "bold",
            isItalic : true,
        }
    }

    setColor = (colors) => {
        this.setState({
            color: colors

        });
    }
    setSize = (sizes) => {
        this.setState({
            fontSize: sizes
        });
    }
    deleteEvent = (index) => {
        const copyPostArray = Object.assign([], this.state.postArray);
        copyPostArray.splice(index, 1);

        this.setState({
            postArray: copyPostArray
        })
    }

    setPost = (element) => {
        this.Body = " AAA"
    }

    addPost = (id) => {
        console.log('11', id);
        
        
         this.postID = id;
         if(id == 1)
         {
             this.Body =" i Phone 11 11"
         }
         if(id == 2)
         {
             this.Body =" 19000000 VND"
         }
         const copyPostArray = Object.assign([], this.state.postArray);
         copyPostArray.push({
             id: id,
             body: this.Body
         })
         this.setState({
             postArray: copyPostArray
         })
    }
    addCart = (id) =>{
        console.log('11', id);
        
        
         this.postID = id;
         if(id == 1)
         {
             this.Body =" i Phone 11 "
         }
         if(id == 2)
         {
             this.Body =" 19000000 VND"
         }
         const copyCartArray = Object.assign([], this.state.cartArray);
         copyCartArray.push({
             id: id,
             body: this.Body
         })
         this.setState({
            cartArray: copyCartArray
         })   
    }
    onClickBold = (isBold) => {
        this.setState({
            isBold : !this.state.isBold
        })
    }
    onClickItalic = (isItalic) =>{
        this.setState({
            isItalic : !this.state.isItalic
        })
    }
    render() {
        const { postArray } = this.state;


        return (
            <div className='design-context'>
                <div className='row'>
                    <div className='col-3'>
                        <Menu add={this.addPost.bind(this)} addcart={this.addCart.bind(this)}></Menu>
                    </div>

                    <div className='col-9 menu-content'>
                        <div className='row tool-bar justify-content-around'>
                            <div className='col-2 tool-bar__item'>
                                <FontPicker> </FontPicker>
                            </div>
                            <div className='col-2 tool-bar__item'>
                                <FontSize setSizes={this.setSize} ></FontSize>
                            </div>
                            <div className='col-1 tool-bar__item ' onClick={this.onClickBold}>
                                <AiOutlineBold />
                            </div>
                            <div className='col-1 tool-bar__item' onClick={this.onClickItalic}>
                                <FiItalic />
                            </div>
                            <div className='col-1 tool-bar__item'>
                                <ButtonExample  setColors={this.setColor}></ButtonExample>

                            </div>
                            <div className='col-1 tool-bar__item'>
                                <GrTextAlignLeft />
                            </div>
                            <div className='col-1 tool-bar__item'>
                                <FaListUl />
                            </div>
                            <div className='col-1 tool-bar__item'>
                                <ImTextHeight />
                            </div>
                            <div className='col-1 tool-bar__item'>
                                <FaBorderAll />
                            </div>
                        </div>
                        <div className='row design'>
                            <div>
                                    {                                    
                                        this.state.postArray.map((tag , index) =>{
                                            return(        
                                                <NameElement
                                                    key={index}
                                                    id ={tag.id}
                                                    body = {tag.body}
                                                    delete ={this.deleteEvent.bind(this. index)}
                                                    color={this.state.color}
                                                    fontSize={this.state.fontSize}
                                                    bold = {  this.state.isBold ?  'bold' : 'normal' }
                                                    italic = { this.state.isItalic ? 'italic' : 'normal'}
                                                />    
                                            )
                                        })  
                                    }
                            </div>
                            <div>
                                    {                                    
                                        this.state.cartArray.map((tag , index) =>{
                                            return(        
                                                <PriceElement
                                                    key={index}
                                                    id ={tag.id}
                                                    body = {tag.body}
                                                    delete ={this.deleteEvent.bind(this. index)}
                                                    color={this.state.color}
                                                    fontSize={this.state.fontSize}
                                                    bold = {  this.state.isBold ?  'bold' : 'normal' }
                                                    italic = { this.state.isItalic ? 'italic' : 'normal'}
                                                />    
                                            )
                                        })  
                                    }
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}
