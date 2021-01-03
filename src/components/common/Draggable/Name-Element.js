import React, { Component } from 'react';
import '../../../assets/css/Home.css'

class NameElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }   
    render() {
        return (
            <div className='items-element apply-font cube target'   id={this.props.id}  >
                    {this.props.body}
            </div>
        )
    }
}
export default NameElement;