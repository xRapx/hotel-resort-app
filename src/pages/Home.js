import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Hero>
      <Banner title="Luxurious rooms " subtile="deluxe rooms starting at $299">
        <Link to="/rooms" className="btn-primary">
          Ours Rooms
        </Link>
      </Banner>
    </Hero>
  );
}
