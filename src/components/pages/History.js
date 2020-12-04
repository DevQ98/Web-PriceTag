
import React from 'react';
import Polotno from '../Polotno';
import Search from '../Search';
import HistoryPage from './HistoryPage';
function History() {
  return (
    <>
       <Search></Search>
      <HistoryPage></HistoryPage> 
      <Polotno></Polotno>
    </>
  );
}

export default History;