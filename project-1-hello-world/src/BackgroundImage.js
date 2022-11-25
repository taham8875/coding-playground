import React from "react";
import "./BackgroundImage.css";
import logo from "./logo.svg";

export default function BackgroundImage() {
  return (
    <div className="background-image">
      <img src={logo} alt="logo" srcset="" />
    </div>
  );
}
