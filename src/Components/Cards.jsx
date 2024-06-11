import React from 'react';
import Card from "./Card"

const Cards = ({cardsData}) => {
  
  
  if (!cardsData  ) return;

  return (
    <div id='cards'>
       {cardsData.map((item,index) =>(<Card key={item.recipe.label} cardData={item} />))}
    </div>
  )
}

export default Cards;