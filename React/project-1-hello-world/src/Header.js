import React from "react";
import "./Header.css";
import logo from "./logo.svg";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <img src={logo} alt="logo" />
          <h2>ReactFacts</h2>
          <h3>First React project</h3>
        </div>
      </div>
    </>
  );
}
