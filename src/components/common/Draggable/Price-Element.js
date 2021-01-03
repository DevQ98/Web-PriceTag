import React, { Component } from 'react';
import '../../../assets/css/Home.css'
class PriceElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }   
    render() {
        if(this.props.isTarget  == this.props.id)
        {
            document.getElementById(`${this.props.id}`).style.fontWeight = this.props.fontWeight
            console.log("ass" ,this.props.fontWeight )
        }
            
    
        return (
                <div className='items-element apply-font cube target'   id={this.props.id}  >
                    {this.props.body}
                </div>
        )
    }
}
export default PriceElement;