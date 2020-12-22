import React, { Component } from 'react';
import Draggable from 'react-draggable';

import '../../../assets/css/Home.css'
class DateElement extends Component {
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
            <Draggable bounds="parent">
                <div className='items-element apply-font' style={{ color: this.props.color,fontSize: this.props.fontSize + "px", fontWeight: this.props.bold, fontStyle: this.props.italic }}>
                    {this.props.body}
                    {this.props.id}
                    {/* <button onClick={this.props.delete} >Delete</button> *  onClick={this.onClickItem.bind(this)}*/}
                </div>
            </Draggable>
        )
    }
}
export default DateElement;