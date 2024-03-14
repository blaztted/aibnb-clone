import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
import "./App.css";

const mapCards = data.map((str) => {
  return (
    <Card
      key={str.id}
      img={str.coverImg}
      rating={str.stats.rating}
      reviewCount={str.stats.reviewCount}
      location={str.location}
      title={str.title}
      price={str.price}
      openSpots={str.openSpots}
    />
  );
});

export default function App() {
  return (
    <div className="root-container">
      <div>
        <Navbar />
        <Hero />
        <section className="cards-list">{mapCards}</section>
      </div>
    </div>
  );
}
