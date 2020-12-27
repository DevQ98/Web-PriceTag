import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import { HiTemplate } from "react-icons/hi";
import { FaRegClone } from "react-icons/fa"
import { AiOutlineCloudUpload } from "react-icons/ai";
import { MdTexture } from "react-icons/md";
import BGComponent from "../../components/common/Picker/Color-PickerBG";
import Card from "../common/Draggable/Card"
import ReactHintFactory from 'react-hint';
import 'react-hint/css/index.css';
import '../../assets/css/Menu.css';
import '../../assets/css/Design.css';
import Board from '../common/Draggable/Board';
const ReactHint = ReactHintFactory(React)
export default class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            leftOpen: true,
            nono : true,
            templateArray: [],
            height :"",
            width :"",
            color:""
        }
    }
    toggleSidebar = (event) => {
        let key = `${event.currentTarget.parentNode.id}Open`;
        this.setState({ [key]: !this.state[key]  ,
            leftOpen : !this.state.leftOpen,

        });
        console.log("aa",key)
            this.props.setSides(key)
            
      }
      handleHeightChange= (e)  =>{
        this.setState({height: e.target.value});
     }
     handleWidthChange = (e) => {
        this.setState({width: e.target.value});
     }
     setBG = (colors) => {
        this.setState({
            color: colors

        });
    }
     handleLogin=() => {

        console.log("aaaa",this.state.height)

        const copytemplateArray = Object.assign([], this.state.templateArray);
        setTimeout(() => {
            copytemplateArray.splice(this, 1);
        }, 1);
       
        copytemplateArray.push({
            h : this.state.height,
            w: this.state.width
        })
      
        this.setState({
            templateArray: copytemplateArray
        })
        
        console.log("aaaa",this.state.templateArray)
    }
    render() {
        let  BG = this.state.color;
        let  heights = this.state.height;
        console.log("aa " , this.state)
        let widths = this.state.width;
        return (
            <>
                <ReactHint autoPosition events delay />
                <Tab.Container  defaultActiveKey="1" >               
                        <div className='menu'  >
                            <Nav className="menu__col"  >
                                <Nav.Item className='menu__col-items ' onClick={this.toggleSidebar} >
                                    <Nav.Link eventKey="1" className='menu__col-item ' data-rh="Templates" data-rh-at="right">
                                            <HiTemplate   />
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='menu__col-items ' onClick={this.toggleSidebar}>
                                    <Nav.Link eventKey="2" className='menu__col-item'  data-rh="Elements" data-rh-at="right">
                                            <FaRegClone  />                              
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='menu__col-items' onClick={this.toggleSidebar}>
                                    <Nav.Link eventKey="3" className='menu__col-item' data-rh="Unload"  data-rh-at="right">    
                                            <AiOutlineCloudUpload  />                            
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='menu__col-items' onClick={this.toggleSidebar}>
                                    <Nav.Link eventKey="4" className='menu__col-item' data-rh="Background" data-rh-at="right">
                                            <MdTexture   />                          
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='menu__col-request'onClick={this.toggleSidebar}>
                                    <Nav.Link eventKey="5">
                                        <span className='menu__item' data-rh="Request" data-rh-at="right">
                                            <i className="fas fa-user-edit"  ></i>                            
                                        </span>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <div className={` menu__content--${this.props.visible}`}  >
                            <Tab.Content className='layout--none' >
                                <Tab.Pane eventKey="1" className="menu__template">
                                    <div className="menu-content__search">
                                        <span className="icon__search"> <i class="fa fa-search "></i> </span> 
                                        <input type="text" className="panel-search-input" 
                                        autocomplete="off" data-toggle="db-search-input" placeholder="Search "></input>
                                    </div>
                                    <div className="menu-content__size">
                                        <div className="menu-content__size--height">
                                                <span className="span_txt"> Dài</span>
                                                <input className="panel-size-input" type="text" value={this.state.height} onChange={this.handleHeightChange}></input>
                                        </div>
                                        <div  className="menu-content__size--width">
                                                <span className="span_txt">Rộng</span>
                                                <input className="panel-size-input" type="text" value={this.state.width} onChange={this.handleWidthChange}></input>
                                        </div>
                                        <button type="button" className=" btn btn__create--template" onClick={this.handleLogin}>Create</button>
                                    </div>
                                    {                                    
                                       this.state.templateArray.map((tag , index) =>{
                                           return<div className="menu-content__template">
                                                    <button className="btn__template stamp1" onClick={()=>this.props.addTemplate(heights,widths)} data-id="1" > </button>
                                                    <span> {this.state.height} x {this.state.width} px </span>
                                                 </div>  
                                       })  
                                    }
                                    <div className="menu-content__template">
                                        <button className="btn__template stamp1" onClick={()=>this.props.addTemplate("56" , "56")} data-id="1" > </button>
                                        <span> 56 x 56 px </span>
                                    </div>
                                    <div className="menu-content__template"  >
                                        <button className="btn__template stamp2"  onClick={()=>this.props.addTemplate("100" , "100")} data-id="1" >  </button>
                                        <span> 100 x 100 px </span>
                                    </div>
                                    <div className="menu-content__template">
                                        <button className="btn__template stamp3"   onClick={()=>this.props.addTemplate("800" , "500")} data-id="1" >  </button>
                                        <span> 800 x 500 px </span>
                                    </div>
                                    <div className="menu-content__template" >
                                        <button className="btn__template stamp4" onClick={()=>this.props.addTemplate("700" , "800")} data-id="1"  > </button>
                                        <span> 700 x 800 px </span>
                                    </div>
                                    <div className="menu-content__template"  >
                                        <button className="btn__template stamp5" onClick={()=>this.props.addTemplate("600" , "800")} data-id="1">  </button>
                                        <span> 600 x 800 px </span>
                                    </div>
                                    <div className="menu-content__template">
                                        <button className="btn__template stamp6"  onClick={()=>this.props.addTemplate("650" , "750")} data-id="1" ></button>
                                        <span> 650 x 750 px </span>
                                    </div>
                                    <div className="menu-content__template"  >
                                        <button className="btn__template stamp7" onClick={()=>this.props.addTemplate("500" , "700")} data-id="1">  </button>
                                        <span> 500 x 700 px </span>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="2">
                                    <div className="menu-content__search">
                                        <span className="icon__search"> <i class="fa fa-search "></i> </span> 
                                        <input type="text" className="panel-search-input" 
                                        autocomplete="off" data-toggle="db-search-input" placeholder="Search"></input>
                                    </div>
                                   
                                    <div>
                                        <button className="btn__element" onClick={()=>this.props.addName(0 + (Math.random() * (100-0)),"BABA")} data-id="1" > Tên Sản phẩm</button>
                                    </div>
                                    <div style={{zIndex : 999}}>
                                        <button className="btn__element" onClick={()=>this.props.addPrice(0 + (Math.random() * (100-1)),"MANA")}  data-id="2" > Giá Gốc </button>
                                    </div>
                                    <div>
                                        <button className="btn__element" onClick={()=>this.props.addBrand(0 + (Math.random() * (100-1)),"MANA")}  data-id="1" > Hãng sản xuất </button>
                                    </div>
                                    <div>
                                        <button className="btn__element" onClick={()=>this.props.addDate(0 + (Math.random() * (100-1)),"MANA")} data-id="1" > Ngày in </button>
                                    </div>
                                    <div>
                                        <button className="btn__element" onClick={()=>this.props.addDiscount(0 + (Math.random() * (100-1)),"MANA")} data-id="1" > Giá khuyến mãi </button>
                                    </div>
                                    <div>
                                        <button className="btn__element" onClick={()=>this.props.addPromotion(0 + (Math.random() * (100-1)),"MANA")} data-id="1" > Chương trình khuyến mãi </button>
                                    </div>
                                    <div>
                                        <button className="btn__element" onClick={()=>this.props.addStatus(0 + (Math.random() * (100-1)),"MANA")}  data-id="1" > Trang thái </button>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3">
                                    <div>Uploads</div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="4">
                                    <div>
                                        <BGComponent setBGs={this.setBG} ></BGComponent>
                                        <button type="button" className=" btn bnt__request" onClick={()=>this.props.addBG(BG)} >Change </button>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="5">
                                    <div  className="menu-content__request">
                                        <input className="txt_decription" type="text" placeholder="Desciptions" ></input>
                                        <button type="button" className=" btn bnt__request" > Send Request</button>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </div>

                </Tab.Container>
            </>
        )
    }

}
