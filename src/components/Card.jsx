import React from "react";
import sax from "../assets/img/sax2.jpg";
import fav from "../assets/img/favorite.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
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
