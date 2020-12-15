import React from 'react';
import '../../assets/css/Sidebar.css'

class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leftOpen: true,
      rightOpen: true,
    }
  }

  toggleSidebar = (event) => {
    let key = `${event.currentTarget.parentNode.id}Open`;
    console.log(event.currentTarget.parentNode.id)
    this.setState({ [key]: !this.state[key] });
  }

  render() {
    let leftOpen = this.state.leftOpen ? 'open' : 'closed';

    return (
      <div id='layout'>
                         
          <div id='left' className={leftOpen} >             
          <div className={`sidebar-${leftOpen}`} > HUHU
        </div>
            
                   



          </div>

          <div id='main'>
              <div className='content'>
                  HAHAHA
              </div>
          </div>

      </div>
    );
  }
}

export default SideBar;