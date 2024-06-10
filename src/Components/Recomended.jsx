import React, { useRef, useState } from 'react'
import Cards from './Cards'
import "../Stylesheets/Recomended.css"
import useReciepe from '../utils/customHooks/useReciepe';
import { Search } from 'lucide-react';

const Recomended = () => {
  let searchquery = useRef(null);
  const [query, setQuery] = useState(null);
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setQuery(searchquery.current.value);
    }
  };
  useReciepe(query);
   return (
    <div id='recomended'>
      <div id="search">
     <Search/><input ref={searchquery} type="text" onKeyDown={handleSearch}  placeholder='Mummy! Aaj kya ban rha hh?'></input>
     </div>
      
      <h1>Recomended  Recipes </h1>
      <p>Popular choices</p>
      <Cards/>
    </div>
  )
}

export default Recomended;