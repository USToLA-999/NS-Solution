import React from "react";
import Card from "./Card";

import image1 from "../../assets/logo.png";
import image2 from '../../assets/logo.png'
import image3 from '../../assets/logo.png'

const cards = [
  {
    id: 1,
    amount:2499,
    title: "3 month",
    image: image1,
  },
  {
    id: 2,
    amount:4499,
    title: "6 month",
    image: image2,
   
  },
  {
    id: 3,
    amount:8999,
    title: "12 month",
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