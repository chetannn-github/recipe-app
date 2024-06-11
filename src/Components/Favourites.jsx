import React from 'react'
import Cards from './Cards'
import "../Stylesheets/Recomended.css"
import { useSelector } from 'react-redux';
const Favourites = () => {
  let favs = useSelector((store)=>(store.reciepe.favs));
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  return (
    <div id='recomended' >
      <h1 className='fav'>🍽️ Aapki Fav Dishes 🌟</h1>
      
      <Cards cardsData={favorites}/>
    </div>
  )
}

export default Favourites