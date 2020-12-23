import React, { Component } from 'react';
import Draggable from 'react-draggable';

import '../../../assets/css/Home.css'
class NameElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
             left: this.props.lineleft,
             right: this.props.lineright,
             center: this.props.linecenter,
             style:'',
             id:0,
             backgrounf:""
        }
    }   
    render() {
            let line = "" ;
        if( this.props.linecenter == "center")
            line = "center";
            else
            {
                if(this.props.lineleft== "left")
                    line= "left" ;
             else{
                    line = " right" ;
            }}

        return (
            // color: this.props.color,fontSize: this.props.fontSize + "px", fontWeight: this.props.bold, fontStyle: this.props.italic , textAlign: line           
                 <div className='items-element apply-font cube target'  id={this.props.id} >
                    {this.props.body}
                </div>
        )
    }
}
export default NameElement;