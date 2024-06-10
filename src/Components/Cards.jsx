import React from 'react';
import Card from "./Card"

const Cards = ({cardsData}) => {
  
  
  if (!cardsData  ) return;

  return (
    <div id='cards'>
       {cardsData.map((item,index) =>(<Card key={index} cardData={item} />))}
    </div>
  )
}

export default Cards;