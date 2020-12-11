import React, { Component } from 'react';
import Select from 'react-select';
const options = [
    { value: '2', label: '2' },
    { value: '4', label: '4' },
    { value: '6', label: '6' },
    { value: '8', label: '8' },
    { value: '10', label: '10' },
    { value: '12', label: '12' },
    { value: '14', label: '14' },
    { value: '16', label: '16' },
    { value: '18', label: '18' },
    { value: '20', label: '20' },
    { value: '24', label: '24' },
    { value: '28', label: '28' },
    { value: '32', label: '32' },
    { value: '36', label: '36' },
    { value: '40', label: '40' }
  ]
class FontSize extends Component {
    
  constructor(props) {
    super(props)
    this.state = {
      fontSize: 24
    }
  
  }

  changeSize(event){
     
    this.setState({
      fontSize: event.value

    });
    
  }

  render() {
    let styleobj = { background: "blue", fontSize: 20 }
    return (
      <section style={styleobj}>
        {/* <h2 className="tryout" style={{fontSize: this.state.fontSize+'px'}}>{this.state.fontSize}</h2> */}
        <Select classNamePrefix="Font"  onChange={this.changeSize.bind(this)}  options={options} placeholder="Font size" />  

      </section>
    );

  }
}

export default FontSize ;
