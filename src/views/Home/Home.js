import React from 'react';
import '../../App.css';
import Banner from '../../components/layout/Banner.js';
import TagList from '../../components/common/Carousels/TagList';
import ClickE from '../../components/layout/ClickE.js';
import Move from '../../components/common/Draggable/Move.js'
import '../../assets/css/Home.css'
import Contents from '../../components/common/Draggable/Contents';
function Home() {
  return (
    <>
     {/* <Banner></Banner>
      <div className='container-fluid pt-3'>
          <h2>Recent design</h2>
          <TagList></TagList>
      </div>  */}
      <Contents></Contents>
    </>
  );
}

export default Home;