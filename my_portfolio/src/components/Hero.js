import React from "react";
import Contact from "./Contact";
import image from "../images/profilePhoto.png";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero--content conatiner-fluid">
      <img src={image} className="profile--image img-fluid" alt="my_photo" />
      <h2>Hello! I am</h2>
      <h1 className="main-heading">Sucheta Mukherjee</h1>
      <h3 className="main-title">Frontend Web Developer</h3>
    </div>
  );
}
