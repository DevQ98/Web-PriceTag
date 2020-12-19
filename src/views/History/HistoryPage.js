import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ItemList from '../../components/common/Carousels/ItemList.js'
import '../../assets/css/Home.css'
function HistoryPage() {
    return (
        <div className='container-fluid pt-3'>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" defaultActiveKey="My">
            <Tab eventKey="My" className="Tab-history" title="My Design">
               <ItemList></ItemList>
            </Tab>
            <Tab eventKey="All" className="Tab-history" title="All Design">
                <ItemList></ItemList>
            </Tab>
            </Tabs>
        </div>
    )
}

export default HistoryPage
