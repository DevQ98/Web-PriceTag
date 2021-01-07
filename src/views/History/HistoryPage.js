import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ItemList from '../../components/common/Carousels/ItemList.js'
import '../../assets/css/Home.css'
function HistoryPage() {
    return (
        <div className='history--body'>
            <div className='home__body-title'>
                <div className='home_body-title'> ALL design</div>    
            </div>
            <div className="home__body-content">
                <ItemList></ItemList>
            </div>
        </div>
    )
}

export default HistoryPage
