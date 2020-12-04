import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TagList from './TagList'
function HistoryPage() {
    return (
        <div className='container-fluid pt-3'>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" defaultActiveKey="My">
            <Tab eventKey="My" title="My Design">
                <TagList></TagList>
            </Tab>
            <Tab eventKey="All" title="All Design">
                <TagList></TagList>
            </Tab>
            </Tabs>
        </div>
    )
}

export default HistoryPage
