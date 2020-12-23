import React, { Component } from 'react';
import Draggable from 'react-draggable';

import '../../../assets/css/Home.css'
class DiscountElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // color: this.props.color,
            // fontSize: this.props.fontSize
        }
    }   

    componentDidMount() {
        console.log("A", this.props)
    }

    render() {
        const { color, fontSize } = this.state;
        return (
            <div className='items-element apply-font cube target'  id={this.props.id} >
                    {this.props.body}
                </div>
        )
    }
}
export default DiscountElement;