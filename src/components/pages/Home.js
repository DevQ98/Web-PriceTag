
import React from 'react';
import '../../App.css';
import Search from '../Search';
import TagList from './TagList';
function Home() {
  return (
    <>
      {/* <HeroSection /> */}
      <Search></Search>
      <div className='container-fluid pt-3'>
          <h2>Recent design</h2>
          <TagList></TagList>
      </div>
      
    </>
  );
}

export default Home;