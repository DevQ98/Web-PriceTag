import React, { Component } from 'react';
import '../../../assets/css/Home.css'

class NameElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }   
    render() {
        if(this.props.isTarget  == this.props.id)
        {
            document.getElementById(`${this.props.id}`).style.fontWeight = this.props.fontWeight
            console.log("Style" ,this.props.fontWeight  , this.props.fontStyle)
            document.getElementById(`${this.props.id}`).style.fontStyle = this.props.fontStyle
        }    
    
        return (
                <div className='items-element apply-font cube target'   id={this.props.id}  >
                    {this.props.body}
                </div>
        )
    }
}
export default NameElement;