import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import { GrTemplate } from "react-icons/gr";
import { GrClone } from "react-icons/gr"
import { AiOutlineCloudUpload } from "react-icons/ai";
import { MdTexture } from "react-icons/md";
import '../../assets/css/Menu.css'
export default class Menu extends Component {
    constructor(props){
        super(props);
        
        this.state = {
           

        }
       

    }

    componentDidMount() {
        console.log("A", this.props)
    }
    render() {
        return (
            <>
                <Tab.Container  defaultActiveKey="1"   >               
                        <div className='col tab-icons'  >
                            <Nav className="flex-column">
                                <Nav.Item className='nav-item_tab-menu'>
                                    <Nav.Link eventKey="1">
                                        <div className='tab-item'>
                                            <GrTemplate />
                                        </div>
                                        <div>
                                            <a class="tab-element-text">Templates</a>
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='nav-item_tab-menu'>
                                    <Nav.Link eventKey="2">
                                        <div className='tab-item'>
                                            <GrClone />
                                        </div>
                                        <div>
                                            <a class="tab-element-text">Elements</a>
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='nav-item_tab-menu'>
                                    <Nav.Link eventKey="3">
                                        <div className='tab-item'>
                                            <AiOutlineCloudUpload />
                                        </div>
                                        <div>
                                            <a class="tab-element-text">Unload</a>
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='nav-item_tab-menu'>
                                    <Nav.Link eventKey="4">
                                        <div className='tab-item'>
                                            <MdTexture />
                                        </div>
                                        <div >
                                            <a class="tab-element-text">BGround</a>
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='nav-item_tab-menu'>
                                    <Nav.Link eventKey="5">
                                        <div className='tab-item'>
                                            <i class="fas fa-user-edit"></i>
                                        </div>
                                        <div >
                                            <a class="tab-element-text">Request</a>
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>

                        <div className={`col  tab-content-${this.props.visible}`}  >
                            <Tab.Content>
                                <Tab.Pane eventKey="1" className="tab-element">
                                    
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
