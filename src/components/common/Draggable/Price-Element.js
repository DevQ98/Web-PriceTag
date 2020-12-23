import React, { Component } from 'react';
import '../../../assets/css/Home.css'
class PriceElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
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
export default PriceElement;