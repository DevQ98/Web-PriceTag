import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ItemList from '../../components/common/Carousels/ItemList.js'
import '../../assets/css/Home.css'
function HistoryPage() {
    return (
        <div className='history--body'>
            <Tabs className="history__tab" defaultActiveKey="profile" id="uncontrolled-tab-example" defaultActiveKey="My">
                <Tab eventKey="My" className="history__tab--content" title="My Design">
                    <ItemList></ItemList>
                </Tab>
                <Tab eventKey="All" className="history__tab--content" title="All Design">
                    <ItemList></ItemList>
                </Tab>
            </Tabs>
        </div>
    )
}

export default HistoryPage
