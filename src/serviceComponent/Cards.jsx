import React from "react";
import Card from "./Card";

import image1 from "../assets/itr1.jpg"
import image2 from '../assets/itr2.jpg'
import image3 from '../assets/itr3.jpg'

const cards = [
  {
    id: 1,
    amount:499,
    title: "ITR 1 & 4 For Individual",
    image: image1,
  },
  {
    id: 2,
    amount:2999,
    title: " Company ITR- 3,6,7,5",
    image: image2,
   
  },
  {
    id: 3,
    amount:1999,
    title: "Individual ITR 3 ",
    image: image3,
    
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center ">
      <div className="row">
        {cards.map(({ title,amount, image,  id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} value={amount}  />
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default Cards;