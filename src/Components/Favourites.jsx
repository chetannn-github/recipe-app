import React from 'react'
import Cards from './Cards'
import "../Stylesheets/Recomended.css"
import { useSelector } from 'react-redux';
const Favourites = () => {
  let favs = useSelector((store)=>(store.reciepe.favs));
  return (
    <div id='recomended'>
      <h1>🍽️ Aapki Fav Dishes 🌟</h1>
      
      <Cards cardsData={favs}/>
    </div>
  )
}

export default Favourites