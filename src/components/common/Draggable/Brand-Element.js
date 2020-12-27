import React, { Component } from 'react';
import Draggable from 'react-draggable';

import '../../../assets/css/Home.css'
class BrandElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }   

    componentDidMount() {
        console.log("A", this.props)
    }

    render() {
        const { color, fontSize } = this.state;
        return (
            <div className='items-element apply-font cube target' style={{color : this.props.color}}  id={this.props.id} >
            {this.props.body}
        </div>
        )
    }
}
export default BrandElement;