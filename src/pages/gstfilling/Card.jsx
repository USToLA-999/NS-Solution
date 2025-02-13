import PropTypes from "prop-types";
import "./card.css";
import { Button } from "../../components/Button";
function Card({ imageSource, title, value, desc }) {
  return (
    <>
      <div className="card text-center mt-3 mb-3 bg-dark animate__animated animate__fadeInUp">
        {/* Image Section */}
        <div className="overflow">
          <img src={imageSource} alt="a wallpaper" className="card-img-top w-100" />
        </div>

        {/* Title and Value Section */}
        <div className="card-body text-light">
          <h2 className="card-title text-3xl">{title}</h2>
          <h2 className="card-title text-3xl">₹ {value}</h2>
        </div>

        {/* Description Section as a List */}
        <div className="card-descbody text-light">
          <ul>
            {desc.map((item, index) => (
              <li key={index} className=" mt-2 mb-3 ">{item}</li>
            ))}
          </ul>
        </div>
        <div className="purchasebuttonbox">
          <div className="buttonbox mt-4 mb-4 ">

                        
                          <a href="#"><Button>Buy Now</Button></a>
                        
                      </div>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.arrayOf(PropTypes.string), // desc must be an array of strings
  imageSource: PropTypes.string,
  value: PropTypes.number,
};

export default Card;
