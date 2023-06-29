// To get the root element from the HTML document
const rootElement = document.querySelector(".root");

// Styling goes in as objects -- Could also use regular CSS styling in a style.css file instead
const headerStyle = {
  border: "2px solid blue",
  color: "black",
  backgroundColor: "#61DBFB",
  fontSize: "1.5em",
  padding: "1rem",
};

// We use className instead of class because class is a reserved work in HTML.
const header = (
  <header style={headerStyle}>
    <div className="header-wrapper">
      <h1>My First Day in 30 Days of React!</h1>
      <h2>Getting Started with React</h2>
      <h3>JS Library</h3>
      <p>Ray Badua</p>
      <small>6/29/2023</small>
    </div>
  </header>
);

const mainStyle = {
  backgroundColor: "lightgrey",
  padding: "1rem",
};

const main = (
  <main style={mainStyle}>
    <div className="main-wrapper">
      <p>What you need to get started:</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
      </ul>
      <p>Its best to have intermediate knowledge on these languages.</p>
    </div>
  </main>
);

const footer = (
  <footer>
    <p>Copyright 2023</p>
  </footer>
);

const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
);

// we render the JSX element using the ReactDOM package
// ReactDOM has the render method and the render method takes two arguments
ReactDOM.render(app, rootElement);
