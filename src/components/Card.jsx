import React from "react";
import sax from "../assets/img/sax2.jpg";
import fav from "../assets/img/favorite.png";

export default function Card(props) {
  let badgeText;
  if (props.str.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.str.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={`/assets/img/${props.str.coverImg}`}
        className="card--image"
        alt="Image  of Saxophone Player"
      />
      <div className="card--stats">
        <img src={fav} className="card--star" alt="Fav Icon" />
        <span>{props.str.rating}</span>
        <span className="gray">({props.str.reviewCount}) • </span>
        <span className="gray">{props.str.location}</span>
        <span>{props.str.country}</span>
      </div>
      <h2>{props.str.title}</h2>
      <p>
        <span className="bold">From £{props.str.price}</span> / hour
      </p>
    </div>
  );
}
