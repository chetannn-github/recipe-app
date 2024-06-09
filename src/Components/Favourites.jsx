import React from 'react'
import Cards from './Cards'
import "../Stylesheets/Recomended.css"
const Favourites = () => {
  return (
    <div id='recomended'>
      <h1>Recomended  Recipes </h1>
      <p>Popular choices</p>
      <Cards/>
    </div>
  )
}

export default Favourites