import React from 'react'
import ItemList from '../../components/common/Carousels/ItemList.js'
function HomePage() {
    return (
        <div className='home--body'>
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