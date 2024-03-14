import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

import "./App.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img="sax2.jpg"
        rating="4.8"
        reviewCount={6}
        country="UK"
        title="Sax Lessons with Jorge Pascácio"
        price={90}
      />
    </div>
  );
}
