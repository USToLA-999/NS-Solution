
import PropTypes from "prop-types";

import "./card.css";
import { propTypes } from "react-bootstrap/esm/Image";

function Card({ imageSource, title, text, value }) {
  return (
    <div className="card text-center mt-3 mb-3 bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top w-100" />
      </div>
      <div className="card-body text-light">
        <h2 className="card-title text-3xl">{title}</h2>
        <h2 className="card-title text-2xl">Rs: {value}</h2>
        
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  value: propTypes.number
};

export default Card;