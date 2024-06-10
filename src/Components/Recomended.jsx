import React, { useRef, useState } from 'react'
import Cards from './Cards'
import "../Stylesheets/Recomended.css"
import useReciepe from '../utils/customHooks/useReciepe';
import { Search } from 'lucide-react';
import { useSelector } from 'react-redux';

const Recomended = () => {
  let searchquery = useRef(null);
  const [query, setQuery] = useState(null);
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setQuery(searchquery.current.value);
    }
  };
  useReciepe(query);
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