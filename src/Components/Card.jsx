import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({title,tags,image,origin}) => {
  let tag = tags.filter((item,index)=>(index<2));
  let origins = origin.filter((item,index)=>(index<2));
  return (
    <div id='card'>
       <Link to={`https://www.youtube.com/results?search_query=${title} recipe`}>
          <div id="image">
            <img src={image} alt="" />

          </div>
          <div id="info">
            <h3>{title}</h3>
            {origins.map((item,index)=>(<p>{item}</p>))}
            <div id="tags">
              {tag.map((item,index)=>(<h4>{item}</h4>))}
              
              
            </div>
          </div>
       </Link>
    </div>
  )
}

export default Card