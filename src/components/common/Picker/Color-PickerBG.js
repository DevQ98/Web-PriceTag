import React from 'react'
import { CompactPicker } from 'react-color';

class BGComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
      background: '#fff',
    }
  }

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
    this.props.setBGs(color.hex)
    
    
  };

  render() {
    return (
      <CompactPicker
        color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }
      />
    );
  }
}
export default BGComponent;