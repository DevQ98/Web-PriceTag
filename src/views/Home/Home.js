import React from 'react';
import '../../App.css';
import Banner from '../../components/layout/Banner.js';
import TagList from '../../components/common/Carousels/TagList';
import '../../assets/css/Home.css'
function Home() {
  return (
    <>
     <Banner></Banner>
      <div className='container-fluid pt-3'>
          <h3>Recent design</h3>
          <TagList></TagList>
      </div> 
    </>
  );
}

export default Home;