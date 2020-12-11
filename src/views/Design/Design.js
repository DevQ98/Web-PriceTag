import React , {useState} from 'react';
import Menu from '../../components/layout/Menu';
import Board from '../../components/common/Draggable/Board';
import Card from '../../components/common/Draggable/Card';

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
function Design() {
    
    return (
        <div className='design-context'>
            <div className='row'>
                <div className='col-3'>
                    <Menu></Menu>
                </div>
                
                <div className='col-9 menu-content'>
                    <div className='row tool-bar justify-content-around'>
                        <div className='col-2 tool-bar__item'>
                                   <FontPicker></FontPicker>
                        </div>
                        <div className='col-2 tool-bar__item'>
                            <FontSize></FontSize>
                        </div>
                        <div className='col-1 tool-bar__item '>
                           <AiOutlineBold/>
                        </div>
                        <div className='col-1 tool-bar__item'>
                          <FiItalic/>
                        </div>
                        <div className='col-1 tool-bar__item'>
                           <ButtonExample/>
                           
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
                        <Board id=" board-2" className=" board">                            
                        <Card id="card-2" className="card" draggable="true">
                                            <p >$ABC</p>
                                            </Card> 
                                            <Card id="card-5" className="card" draggable="true">
                                            <p >$ADC</p>
                                            </Card> 
                    </Board>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Design;