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
        }
    }   

    componentDidMount() {
        
            
    
    }

    render() {
        let line = "" ;
        const { color, fontSize } = this.state;
        if( this.props.linecenter == "center")
            line = "center";
            else
            {
                if(this.props.lineleft== "left")
                    line= "left" ;
             else{
                    line = " right" ;
            }}
            console.log(line)
        return (
    
            <Draggable bounds="parent">
                <div className='items-element apply-font' style={{ color: this.props.color,fontSize: this.props.fontSize + "px", fontWeight: this.props.bold, fontStyle: this.props.italic , textAlign: line  }}>
                    {this.props.body}
                    {this.props.id}
                    {/* <button onClick={this.props.delete} >Delete</button> *  onClick={this.onClickItem.bind(this)}*/}
                </div>
            </Draggable>
        )
    }
}
export default NameElement;