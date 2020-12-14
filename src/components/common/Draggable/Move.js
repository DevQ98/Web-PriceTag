import React, { Component } from 'react';
import Draggable from 'react-draggable';

import '../../../assets/css/Home.css'
 class Tag extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount(){
        console.log("aaa", this.props )
    }

    render() {
        
        return (
            <Draggable>
            <div className='items-element apply-font' style={{color:this.props.color, fontSize: this.props.fontSize +"px" }}>

                {this.props.body}

                <button onClick={this.props.delete} >Delete</button>
            </div>
            </Draggable>
        )
    }
}
export default Tag;