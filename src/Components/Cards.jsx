import React from 'react';
import Card from "./Card"
import { useSelector } from 'react-redux';

const Cards = () => {
  let cardsData = useSelector((store)=>(store.reciepe));
  if (!cardsData  ) return;

  return (
    <div id='cards'>
       {cardsData.map((item,index) =>(<Card title={item.recipe.label} tags={item.recipe.healthLabels} image={item.recipe.image} origin={item.recipe.cuisineType}/>))}
    </div>
  )
}

export default Cards;