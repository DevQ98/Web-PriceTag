import React, { Component } from 'react';
import parse from 'html-react-parser';

import '../../../assets/css/Home.css'
import { connect } from 'react-redux';

class PriceElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }   
    render() {
        console.log(this.props , "props price element")
        console.log("Style" ,this.props.fontWeight  , this.props.fontStyle ,this.props.bullet ,this.props.lineHeight  , this.props.isTarget)

        if(this.props.isTarget  == 50.362001319757475)
        {
            console.log("Style" ,this.props.fontWeight  , this.props.fontStyle ,this.props.bullet ,this.props.lineHeight  , this.props.isTarget)
            document.getElementById(`${this.props.isTarget}`).style.fontWeight = this.props.fontWeight
            document.getElementById(`${this.props.isTarget}`).style.fontStyle = this.props.fontStyle
            document.getElementById(`${this.props.isTarget}`).style.textAlign = this.props.textAlign
            document.getElementById(`${this.props.isTarget}`).style.listStyleType = this.props.bullet
            document.getElementById(`${this.props.isTarget}`).style.lineHeight = this.props.lineHeight

        }    
    
        return (
            <>
                <div className='items-element apply-font cube target' id={this.props.id}    >

                   {this.props.body}

                </div>
                {this.props.html}
               
            </>
        )
    }
}
const mapStateToProps = state => {

    return {
        Price : state.Price
    }
}
const mapDispatchToProps = dispatch => {
    return {
     
      

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PriceElement);