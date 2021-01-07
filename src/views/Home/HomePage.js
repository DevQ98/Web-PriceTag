import React from 'react'
import ItemList from '../../components/common/Carousels/ItemList.js'
import '../../assets/css/Home.css';
import TagList from '../../components/common/Carousels/TagList.js';
import { ImTab } from 'react-icons/im';
import { Link } from 'react-router-dom';
function HomePage() {
    return (
        <div className='home__body'>
            <div className="home__body-content">
                <div>
                    <span className='home_body-title'> Recent Design </span>
                    <Link to="history" className ='Home_body-link'> View all </Link>
                    <TagList></TagList>
                </div>
                <div>
                    <span className='home_body-title'> All Design </span>
                    <span className ='Home_body-link'> View all </span>
                  <ItemList/>
                </div>
                

            </div>
        </div>
    )
}

export default HomePage