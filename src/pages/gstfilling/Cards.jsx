import React from "react";
import Card from "./Card";

import image1 from "../../assets/gst12month.jpg";
import image2 from '../../assets/gst3month.jpg'
import image3 from '../../assets/gst6month.jpg'

const cards = [
  {
    id: 1,
    amount:2499,
    title: "3 month GST Registration",
    image: image1,
  },
  {
    id: 2,
    amount:4499,
    title: "6 month GST Registration",
    image: image2,
   
  },
  {
    id: 3,
    amount:8999,
    title: "12 month GST Registration",
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