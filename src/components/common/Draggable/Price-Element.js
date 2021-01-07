import React, { Component } from 'react';
import '../../../assets/css/Home.css'
import { connect } from 'react-redux';

class PriceElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }   
    render() {
        const { id , fontWeight , fontStyle , textAlign , lineHeight , transform ,bullet , size} = this.props
        console.log(this.props , "props price element")

            setTimeout(function(){ 
                console.log("Style"  , id ,fontWeight);
                document.getElementById(`${id}`).style.fontWeight = fontWeight 
                document.getElementById(`${id}`).style.fontStyle = fontStyle
                document.getElementById(`${id}`).style.textAlign = textAlign
                document.getElementById(`${id}`).style.listStyleType = bullet
                document.getElementById(`${id}`).style.lineHeight = lineHeight
                document.getElementById(`${id}`).style.transform = transform
                document.getElementById(`${id}`).style.fontSize = size+"px"
            }, 1);
            
          

  
        return (
            <>
                <div className='items-element apply-font cube target'  id={this.props.id}    >
                   {this.props.body}
                </div>               
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