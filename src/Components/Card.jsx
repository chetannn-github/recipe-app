import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <div id='card'>
       <Link to={`https://www.youtube.com/results?search_query=daalbati recipe`}>
          <div id="image">
            <img src="./2.jpg" alt="" />

          </div>
          <div id="info">
            <h3>Daal Baati</h3>
            <p>Indian Kitchen</p>
            <div id="tags">
              <h4>Vegeterian</h4>
              <h4>Vegan</h4>
            </div>
          </div>
       </Link>
    </div>
  )
}

export default Card