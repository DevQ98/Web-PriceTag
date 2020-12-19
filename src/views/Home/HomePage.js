import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TagList from '../../components/common/Carousels/TagList.js'
import Item from '../../components/common/Carousels/Item.js'
import ItemList from '../../components/common/Carousels/ItemList.js'
function HomePage() {
    return (
        <div className='home-body'>
            <div className='home-title'>
                <div className='title-text'>Recent design</div>    
            </div>
            <div className="home-content">
                <ItemList></ItemList>
            </div>
        </div>
    )
}

export default HomePage