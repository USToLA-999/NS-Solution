
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
        <h2 className="card-title">{title}</h2>
        <h2 className="card-title">Rs: {value}</h2>
        <p className="card-text text-secondary">
          {text
            ? text
            : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
        </p>
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