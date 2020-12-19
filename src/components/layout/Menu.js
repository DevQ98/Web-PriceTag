import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import { GrTemplate } from "react-icons/gr";
import { GrClone } from "react-icons/gr"
import { AiOutlineCloudUpload } from "react-icons/ai";
import { MdTexture } from "react-icons/md";
import '../../assets/css/Menu.css'
import '../../assets/css/Design.css'
export default class Menu extends Component {
    constructor(props){
        super(props);
        this.state = {
            leftOpen: true
        }
    }
    toggleSidebar = (event) => {
        let key = `${event.currentTarget.parentNode.id}Open`;
        this.setState({ [key]: !this.state[key]  ,
            leftOpen : !this.state.leftOpen
        });
        console.log(this.props)
            this.props.setSides(key)
      }
    componentDidMount() {
        console.log("A", this.props)
    }
    render() {
        let leftOpen = this.state.leftOpen ? 'open' : 'closed';
        return (
            <>
                <Tab.Container  defaultActiveKey="1"   >               
                        <div className='col menu'  >
                            <Nav className="flex-column">
                                <Nav.Item className={`nav-item_tab-menu `} onClick={this.toggleSidebar}>
                                    <Nav.Link eventKey="1">
                                        <span className='menu_tab-item'>
                                            <GrTemplate />
                                        </span>
                                        <span>
                                            <a class="tab-element-text" >Templates</a>
                                        </span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='nav-item_tab-menu' onClick={this.toggleSidebar}>
                                    <Nav.Link eventKey="2">
                                        <span className='menu_tab-item'>
                                            <GrClone />
                                        </span>
                                        <span>
                                            <a class="tab-element-text">Elements</a>
                                        </span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='nav-item_tab-menu' onClick={this.toggleSidebar}>
                                    <Nav.Link eventKey="3">
                                        <span className='menu_tab-item'>
                                            <AiOutlineCloudUpload />
                                        </span>
                                        <span>
                                            <a class="tab-element-text">Unload</a>
                                        </span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='nav-item_tab-menu' onClick={this.toggleSidebar}>
                                    <Nav.Link eventKey="4">
                                        <span className='menu_tab-item'>
                                            <MdTexture />
                                        </span>
                                        <span >
                                            <a class="tab-element-text">BGround</a>
                                        </span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='nav-item_tab-menu'onClick={this.toggleSidebar}>
                                    <Nav.Link eventKey="5">
                                        <span className='menu_tab-item'>
                                            <i class="fas fa-user-edit"></i>
                                        </span>
                                        <span >
                                            <a class="tab-element-text">Request</a>
                                        </span>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>

                        <div className={`col  tab-content-${this.props.visible}`}  >
                            <Tab.Content>
                                <Tab.Pane eventKey="1" className="tab-element">
                                    <div className="tab-content__Element">
                                        <button className="bnt-template stamp1" onClick={()=>this.props.addTemplate(1)} data-id="1" > </button>
                                    </div>
                                    <div className="tab-content__Element">
                                        <button className="bnt-template stamp2" >  </button>
                                    </div>
                                    <div className="tab-content__Element">
                                        <button className="bnt-template stamp3"  >  </button>
                                    </div>
                                    <div className="tab-content__Element">
                                        <button className="bnt-template stamp4" > </button>
                                    </div>
                                    <div className="tab-content__Element">
                                        <button className="bnt-template stamp5" >  </button>
                                    </div>
                                    <div className="tab-content__Element">
                                        <button className="bnt-template stamp6" ></button>
                                    </div>
                                    <div className="tab-content__Element">
                                        <button className="bnt-template stamp7">  </button>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="2">
                                    <div>
                                        <button className="bnt-element" onClick={()=>this.props.addName(1)} data-id="1" > Tên Sản phẩm</button>
                                    </div>
                                    <div>
                                        <button className="bnt-element" onClick={()=>this.props.addPrice(1)}  data-id="1" > Giá Gốc </button>
                                    </div>
                                    <div>
                                        <button className="bnt-element" onClick={()=>this.props.addBrand(1)}  data-id="1" > Hãng sản xuất </button>
                                    </div>
                                    <div>
                                        <button className="bnt-element" onClick={()=>this.props.addDate(1)}  data-id="1" > Ngày in </button>
                                    </div>
                                    <div>
                                        <button className="bnt-element" onClick={()=>this.props.addDiscount(1)}  data-id="1" > Giá khuyến mãi </button>
                                    </div>
                                    <div>
                                        <button className="bnt-element" onClick={()=>this.props.addPromotion(1)}  data-id="1" > Chương trình khuyến mãi </button>
                                    </div>
                                    <div>
                                        <button className="bnt-element" onClick={()=>this.props.addStatus(1)}  data-id="1" > Trang thái </button>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3">
                                    <div>Uploads</div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="4">
                                    <div>BKground</div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="5">
                                    <div>Request</div>
                                </Tab.Pane>

                            </Tab.Content>
                        </div>

                </Tab.Container>

            </>
        )
    }

}
