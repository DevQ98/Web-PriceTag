import React from 'react';
import Menu from '../Menu';
import Toolbar from 'polotno/toolbar/toolbar';
import Board from '../Board';
import Card from '../Card';

import {BiBorderAll} from "react-icons/bi";
import {GrTextAlignLeft} from "react-icons/gr";
import {FiItalic} from "react-icons/fi";
import {AiOutlineBold} from "react-icons/ai";
import {BiListUl} from "react-icons/bi";
import {MdFormatColorFill} from "react-icons/md";
import {CgFormatLineHeight} from "react-icons/cg";


import '../Menu.css';
function Design(props) {

    console.log("aaa0",props )
    return (
        <div className='design-context'>
            <div className='row'>
                <div className='col-3'>
                    <Menu></Menu>
                </div>
                
                <div className='col-9 menu-content'>
                    <div className='tool-bar row'>
                        <div className='col'>
                            Font
                        </div>
                        <div className='col'>
                        size
                        </div>
                        <div className='col'>
                           <AiOutlineBold/>
                        </div>
                        <div className='col'>
                          <FiItalic/>
                        </div>
                        <div className='col'>
                           <MdFormatColorFill/>
                        </div>
                        <div className='col'>
                             <GrTextAlignLeft/>
                        </div>
                        <div className='col'>
                            <BiListUl/>
                        </div>
                        <div className='col'>
                            <CgFormatLineHeight/>
                        </div>
                        <div className='col'>
                            <BiBorderAll/>
                        </div>                        
                    </div>
                    <div className='row'>
                        <Board id=" board-2" className=" board">                            
                        <div >
                            <Card id="card-2" className="card" draggable="true">
                            <p >$ABC</p>
                             </Card> 
                            <Card id="card-4" className="card" draggable="true">
                            <p >$ADC</p>
                             </Card> 
                        </div>  
                    </Board>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Design;