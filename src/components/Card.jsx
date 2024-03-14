import React from "react";
import sax from "../assets/img/sax2.jpg";
import fav from "../assets/img/favorite.png";

export default function Card(props) {
  return (
    <div className="card">
      {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
      <img
        src={`/assets/img/${props.img}`}
        className="card--image"
        alt="Image  of Saxophone Player"
      />
      <div className="card--stats">
        <img src={fav} className="card--star" alt="Fav Icon" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
        <span>{props.country}</span>
      </div>
      <h2>{props.title}</h2>
      <p>
        <span className="bold">From £{props.price}</span> / hour
      </p>
    </div>
  );
}
