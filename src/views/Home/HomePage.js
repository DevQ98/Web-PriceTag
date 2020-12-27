import React from 'react'
import ItemList from '../../components/common/Carousels/ItemList.js'
import '../../assets/css/Home.css';
function HomePage() {
    return (
        <div className='home__body'>
            <div className='home__body-title'>
                <div className='title-text'>Recent design</div>    
            </div>
            <div className="home__body-content">
                <ItemList></ItemList>
            </div>
        </div>
    )
}

export default HomePage