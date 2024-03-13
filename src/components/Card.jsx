import React from "react";
import sax from "../assets/img/sax2.jpg";
import fav from "../assets/img/favorite.png";

export default function Card() {
  return (
    <div className="card">
      <img src={sax} className="card--image" />
      <div className="card--stats">
        <img src={fav} className="card--star" />
        <span className="gray">5.0</span>
        <span className="gray">(6) • </span>
        <span>USA</span>
      </div>
      <p>Sax Lessons with Jorge Pascácio</p>
      <p>
        <span className="bold">From £70</span> / hour
      </p>
    </div>
  );
}
