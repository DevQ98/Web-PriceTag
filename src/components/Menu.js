import React ,{useState} from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Card from './Card';
import Board from './Board'
import { SketchPicker } from 'react-color';
import { GrTemplate } from "react-icons/gr";
import { GrClone} from "react-icons/gr"
import {AiOutlineCloudUpload} from "react-icons/ai";
import {MdTexture} from "react-icons/md";

import './Menu.css'
function Menu() {
    return (
        <>
            <Tab.Container  defaultActiveKey="1" >
            <div className='row'>
                <div className ='col-3 left-menu'>
                    <Nav className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="1">
                                <div className='tab-item'>
                                    <GrTemplate />
                                </div>
                                <div>
                                    <a class="tab-element-text">Templates</a>
                                </div> 
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="2">
                                <div className='tab-item'>
                                    <GrClone/>
                                </div>
                                <div>
                                    <a class="tab-element-text">Elements</a>
                                </div>
                        </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="3">
                                <div className='tab-item'>
                                    <AiOutlineCloudUpload/>
                                </div>
                                <div>
                                    <a class="tab-element-text">Unload</a>
                                </div>
                        </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="4">
                                <div className='tab-item'>
                                        <MdTexture/>
                                </div>
                                <div >
                                    <a class="tab-element-text">BGround</a>
                                </div>
                        </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
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
                        <Tab.Pane eventKey="1">
                                    <Tab.Pane eventKey="1">
                                        <Board id="board-1" className="board ">
                                            <Card id="card-1" className="card" draggable="true">
                                                <p >iPhone 8</p>
                                            </Card>
                                            <Card id="card-3" className="card" draggable="true">
                                                <p >Apple</p>
                                            </Card>
                                        </Board>
                                    </Tab.Pane>                             
  
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

export default Menu

