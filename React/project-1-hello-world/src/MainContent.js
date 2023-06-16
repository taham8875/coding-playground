import React from "react";
import "./MainContent.css";

export default function MainContent() {
  return (
      <div className="main-content">
        <div className="container">
          <h1>Fun facts about React</h1>
          <ul>
            <li>Free and open source</li>
            <li>Created by Jordan Walke</li>
            <li>Maintained by Facebook</li>
            <li>It is a library not a framework</li>
            <li>It has MIT license</li>
          </ul>
        </div>
      </div>
  );
}
