import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import { GrTemplate } from "react-icons/gr";
import { GrClone } from "react-icons/gr"
import { AiOutlineCloudUpload } from "react-icons/ai";
import { MdTexture } from "react-icons/md";
import '../../assets/css/Menu.css'
export default class Menu extends Component {


    onClickMenu = (e) => {
        debugger
        if(e.target.attributes['data-id'].value != undefined || e.target.attributes['data-id'].value != null){
            this.props.add(e.target.attributes['data-id'].value)
        }
      
    }

    render() {


        return (
            <>
                <Tab.Container defaultActiveKey="1" >
                    <div className='row'>
                        <div className='col-3 left-menu'>
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

                        <div className='col-9'>
                            <Tab.Content>
                                <Tab.Pane eventKey="1" className="tab-element">
                                    <div>
                                        <button className="bnt-element" onClick={()=>this.props.add(1)} data-id="1" > Tên Sản phẩm</button>
                                    </div>
                                    <div>
                                        <button className="bnt-element" onClick={()=>this.props.add(2)}  data-id="2" > Giá </button>
                                    </div>
                                    <div>
                                        <button className="bnt-element" onClick={()=>this.props.add(3)}  data-id="3"> Khuyến mãi</button>
                                    </div>
                                    <div>
                                        <button className="bnt-element" onClick={()=>this.props.add(4)}  data-id="4"> Giảm giá</button>
                                    </div>
                                    <div>
                                        <button className="bnt-element" onClick={()=>this.props.add(5)}  data-id="5"> Hãng</button>
                                    </div>
                                    <div>
                                        <button className="bnt-element" onClick={()=>this.props.add(6)}  data-id="6"> lalala</button>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="2">
                                    <div>Element</div>
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
                    </div>
                </Tab.Container>

            </>
        )
    }

}
