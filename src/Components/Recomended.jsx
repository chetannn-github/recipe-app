import React, { useRef, useState } from 'react'
import Cards from './Cards'
import "../Stylesheets/Recomended.css"
import useReciepe from '../utils/customHooks/useReciepe';
import { Search } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTxt } from '../utils/redux/reciepeSlice';

const Recomended = () => {
  let searchquery = useRef(null);
 let dispatch = useDispatch();
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      dispatch(changeSearchTxt(searchquery.current.value));
    }
  };
   useReciepe();
  let cardsData = useSelector((store)=>(store.reciepe.recommended));
   return (
    <div id='recomended'>
      <div id="search">
     <Search/><input ref={searchquery} type="text" onKeyDown={handleSearch}  placeholder='🍲 Mummy, aaj kya bana rahi ho?'></input>
     </div>
      
      <h1>Recomended  Recipes </h1>
      <p>Popular choices</p>
      <Cards cardsData={cardsData}/>
    </div>
  )
}

export default Recomended;