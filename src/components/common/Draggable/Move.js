import React, { Component } from 'react';
import Draggable from 'react-draggable';

import '../../../assets/css/Home.css'
class Tag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // color: this.props.color,
            // fontSize: this.props.fontSize
        }
    }

    componentDidMount() {
        console.log("aaa", this.props)
    }

    // onClickItem() {
    //     console.log("222")
    // }

    render() {
        const { color, fontSize } = this.state;
        return (
            <Draggable>
                <div className='items-element apply-font' style={{ color: color, fontSize: fontSize + "px", fontWeight: this.props.bold, fontStyle: this.props.italic }}>
                    {this.props.body}
                    {this.props.id}
                    {/* <button onClick={this.props.delete} >Delete</button> *  onClick={this.onClickItem.bind(this)}*/}
                    {/* <input type="checkbox" /> */}
                </div>
            </Draggable>
        )
    }
}
export default Tag;