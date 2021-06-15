import { Link } from "react-router-dom";
import React from "react";

const CharacterCard = ({ item }) => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={item.thumbnail.path + "/portrait_small.jpg"}
        alt=""
      />
      <div className="card-body">
        <h4 className="card-title">
          <strong>Name:</strong>
          {item.name}
        </h4>
        <p className="card-text">
          <strong>Description:</strong>
          {item.description}
        </p>
        <Link style={{ color: "inherit" }} to={`/{characterId}`}>
          <button type="button" className="btn btn-warning">
            See details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CharacterCard;
