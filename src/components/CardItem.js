import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img className="cards__item__img" alt="" src={props.src} />
          </figure>
          <div className="cards__item__info">
            <p className="cards__item__name">{props.name}</p>
            <p className="cards__item__text">{props.text}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
