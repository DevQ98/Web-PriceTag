import React, { Component } from 'react';
import '../../assets/css/Home.css';

class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div
        className="items-template "
        style={{ width: 700 + 'px !important', height: 700 + 'px !important' }}
      >
        {this.props.body}
        {this.props.id}
      </div>
    );
  }
}
export default Template;
