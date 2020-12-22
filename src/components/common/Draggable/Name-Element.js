import React, { Component } from 'react';
import Draggable from 'react-draggable';

import '../../../assets/css/Home.css'
class NameElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
             left: this.props.lineleft,
             right: this.props.lineright,
             center: this.props.linecenter,
             style:'',
             id:0,
             backgrounf:""
        }
    }   

    componentDidMount() {
        
            
    
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.id !=prevState.id)
        {
            console.log(prevProps,prevState)
        }
     
    }
    ChangeStyle(id)
    {
        
            let color=this.props.color
            this.setState({id:this.props.id,style:color,backgrounf:'blue'})
        
        
    }
    render() {
        let line = "" ;
        const { color, fontSize,style,id,backgrounf } = this.state;
        if( this.props.linecenter == "center")
            line = "center";
            else
            {
                if(this.props.lineleft== "left")
                    line= "left" ;
             else{
                    line = " right" ;
            }}
         //   console.log(line)
        return (
            // color: this.props.color,fontSize: this.props.fontSize + "px", fontWeight: this.props.bold, fontStyle: this.props.italic , textAlign: line 
            <Draggable bounds="parent">
          
                <div className='items-element apply-font' id= {this.props.id} onClick={()=>this.ChangeStyle(this.props.id)} style={{color:style,background:backgrounf }}>
                

               
                    {this.props.body}
                    {this.props.id}
                    {/* <button onClick={this.props.delete} >Delete</button> *  onClick={this.onClickItem.bind(this)}*/}
                </div>
            </Draggable>
        )
    }
}
export default NameElement;