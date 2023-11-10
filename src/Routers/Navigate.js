import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Rooms from "../pages/Rooms";
import SingleRoom from "../pages/SingleRoom";
import Error from "../pages/Error";
import logo from "../images/logo.svg";
import { RiMenu3Line } from "react-icons/ri";
import { useState } from "react";

export default function Navigate() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen({
      open: !open,
    });
    // console.log(open);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Beach Resort" />
            </Link>
            <button type="button" className="nav-btn" onClick={handleClick}>
              <RiMenu3Line className="nav-icon" />
            </button>
          </div>
          <ul className={open ? "nav-links show-nav" : "nav-links"}>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/rooms">ROOMS</Link>
            </li>
            <li>
              <Link to="/single-room">SingleRoom</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/single-room" element={<SingleRoom />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
