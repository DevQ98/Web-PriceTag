import  React , {Component } from 'react';
import '../../../assets/css/Home.css'
export default class Tag extends Component {
    
    
    render (props) {
        return (
<div className='items-element apply-font' style={this.props.color}>

    {this.props.body}
         
    {/* <button onClick={this.props.delete} >Delete</button> */}
</div>
        )
    }
}