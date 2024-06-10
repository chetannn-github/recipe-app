import { Cookie, Heart } from 'lucide-react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { addFavs, removeFavs } from '../utils/redux/reciepeSlice';

const Card = ({cardData}) => {
  let {label:title,healthLabels:tags,image,cuisineType:origin,yield:servings} = cardData.recipe;
  let favs = useSelector((store)=>(store.reciepe.favs));
  // console.log(cardData)
  let dispatch = useDispatch();
  let tag = tags.filter((item,index)=>(index<2));
  let origins = origin.filter((item,index)=>(index<2));
  let checkfav =  favs.some((item,index) =>(item.recipe.label===(title)));
  let [fav,toggleFav] = useState(checkfav);
  let handleFav =(e) =>{
    e.preventDefault();
    
    if(fav){
       let remove = favs.filter((item,index) =>!(item.recipe.label===(title)));
        console.log(remove)
        dispatch(removeFavs(remove))
    }else{
        dispatch(addFavs(cardData))
    }
    toggleFav((fav)=>!fav)

  }
  return (
    <div id='card'>
       <Link to={`https://www.youtube.com/results?search_query=${title} recipe`}>
          <div id="image">
            <img src={image} alt="" />
            <div id="serving"><Cookie />{servings} Servings</div>
            <div id="favs" onClick={handleFav}><Heart className={`heart ${fav? "fill":""}`}/></div>

          </div>
          <div id="info">
            <h3>{title}</h3>
            {origins.map((item,index)=>(<p key={index}>{item}</p>))}
            <div id="tags">
              {tag.map((item,index)=>(<h4 key={index}>{item}</h4>))}
              
              
            </div>
          </div>
       </Link>
    </div>
  )
}

export default Card