
import Card from "./Card";

import image1 from "../../assets/gst12month.webp";
import image2 from '../../assets/gst3month.webp'
import image3 from '../../assets/gst6month.webp'

const cards = [
  {
    id: 1,
    amount:2499,
    title: "Basic",
    image: image1,
    desc: ["GST Registration ", "GST Return Filing for 3 Months", "Call, Chat, Email Support","Personally assigned GST Expert","Consultation Available in 3 Languages including English"],
  },
  {
    id: 2,
    amount:4499,
    title: "Standard",
    image: image2,
    desc: ["GST Registration ", "GST Return Filing for 3 Months", "Call, Chat, Email Support","Personally assigned GST Expert","Consultation Available in 3 Languages including English"],
  },
  {
    id: 3,
    amount:8999,
    title: "Premium",
    image: image3,
    desc: ["GST Registration ", "GST Return Filing for 3 Months", "Call, Chat, Email Support","Personally assigned GST Expert","Consultation Available in 3 Languages including English"],
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center ">
      <div className="row">
        {cards.map(({ title,amount, image,  id, desc }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} value={amount} desc={desc} />
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default Cards;