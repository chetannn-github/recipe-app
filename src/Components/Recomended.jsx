import React from 'react'
import Cards from './Cards'
import "../Stylesheets/Recomended.css"

const Recomended = () => {
  return (
    <div id='recomended'>
      <h1>Recomended  Recipes </h1>
      <p>Popular choices</p>
      <Cards/>
    </div>
  )
}

export default Recomended