import React from "react";
import ReactDOM from "react-dom";
import royImage from './images/roy.png';

const header = (
  <header>
    <h1>Welcome to 30 Days of React!</h1>
    <hr></hr>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Ray Badua</p>
    <img src={royImage} alt="roy"></img>
    <p>7/13/2023</p>
  </header>
);

// JSX element, main
const main = (
  <main>
    <p>Prerequisite to get started react.js:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </main>
);

// JSX element, footer
const footer = (
  <footer>
    <p>Copyright 2023</p>
  </footer>
)

// JSX element, app, a container or a parent
const app = (
  <div className="bg-body-tertiary p-3">
    {header}
    {main}
    {footer}
  </div>
);

const rootElement = document.getElementById("root");

ReactDOM.render(app, rootElement);
