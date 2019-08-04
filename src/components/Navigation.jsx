import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/artists">Artists</Link>
    <Link to="/events">Events</Link>
    <Link to="/signin">SignIn</Link>
  </div>
);
export default Navigation;
