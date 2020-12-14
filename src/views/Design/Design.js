import React , {useState , Component} from 'react';
import Menu from '../../components/layout/Menu';
import {FaBorderAll} from "react-icons/fa";
import {GrTextAlignLeft} from "react-icons/gr";
import {FiItalic} from "react-icons/fi";
import {AiOutlineBold} from "react-icons/ai";
import {FaListUl} from "react-icons/fa";
import {ImTextHeight} from "react-icons/im";
import FontPicker from "../../components/common/Picker/Font-Picker";
import ButtonExample from '../../components/common/Picker/Color-Picker'; 
import '../../assets/css/Menu.css';
import FontSize from '../../components/common/Picker/Font-Size';
import Tag from '../../components/common/Draggable/Move';
import Draggable from 'react-draggable';

export default class Design extends Component {
    constructor (props){
        super(props);
        this.postID=0 ;
        this.Body= "I Phone 12 Pro Max";
        this.state = {
            postArray :[                   
            ],
            fontSize : 16,
            color :  {
                r: '241',
                g: '112',
                b: '19',
                a: '1',
              },
             bold :"Bold"
        }
    }
    setColor = (colors) => {
        this.setState({ 
            color : colors

        });
    }
    setSize = (sizes) =>{
        this.setState({
            fontSize : sizes
        });
    }
    deleteEvent = (index) =>{
        const copyPostArray =Object.assign([], this.state.postArray);
        copyPostArray.splice(index,1);
        
        this.setState({
            postArray: copyPostArray
        })
    }
    setPost = (element)=>{
        this.Body = " AAA"
    }
    addPost = ()=>{
        this.postID = this.postID +1;
        const copyPostArray = Object.assign([], this.state.postArray);
        copyPostArray.push({
            id : this.postID , 
            body :this.Body 
        })
        this.setState({
            postArray : copyPostArray
        })
    }
    onClickBold = ()=>{
        this.setState({
            bold : "Bold"
        })
    }
render() {  

    return (
        <div className='design-context'>
            <div className='row'>
                <div className='col-3'>
                    <Menu add ={this.addPost.bind(this)}   ></Menu>
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
                           <AiOutlineBold/>
                        </div>
                        <div className='col-1 tool-bar__item'>
                          <FiItalic/>
                        </div>
                        <div className='col-1 tool-bar__item'>
                           <ButtonExample setColors={this.setColor}></ButtonExample>
                           
                        </div>
                        <div className='col-1 tool-bar__item'>
                             <GrTextAlignLeft/>
                        </div>
                        <div className='col-1 tool-bar__item'>
                            <FaListUl/>
                        </div>
                        <div className='col-1 tool-bar__item'>
                            <ImTextHeight/>
                        </div>
                        <div className='col-1 tool-bar__item'>
                            <FaBorderAll/>
                        </div>                        
                    </div>
                    <div className='row design'>
                    <div>
                            <Draggable>
                                <div>
                                    {                                    
                                        this.state.postArray.map((tag , index) =>{
                                            return(                                
                                                <Tag
                                                key={tag.id}
                                                id ={tag.id}
                                                body = {tag.body}
                                                delete ={this.deleteEvent.bind(this. index)}
                                                 style={{fontSize: this.state.fontSize+'px'} }
                                                
                                                color={{color: this.state.color}}
                                                bold = {{fontSize: this.state.bold}}
                                                />                                            
                                            )
                                        })
                                    }
                                </div>
                            </Draggable>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
}
