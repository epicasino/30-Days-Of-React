// To get the root element from the HTML document
const rootElement = document.querySelector(".root");

// Injecting strings into JSX elements
const firstDay = "My First Day in 30 Days of React!";
const gettingStarted = "Getting Started with React";
const jsLib = "JS Library";
// Injecting objects into JSX elements
const studentName = {
  firstName: "Ray",
  lastName: "Badua",
};

// Injecting numbers into JSX elements
const numOne = 3;
const numTwo = 7;

const result = (
  <p>
    Test Equation: {numOne} + {numTwo} = {numOne + numTwo}
  </p>
);

const headerStyle = {
  border: "2px solid blue",
  color: "black",
  backgroundColor: "#61DBFB",
  fontSize: "1.5em",
  padding: "1rem",
};

const yearBorn = 2003;
const currentYear = new Date().getFullYear();
const age = currentYear - yearBorn;
const currentAge = <p>Current Age: {age}</p>;

// We use className instead of class because class is a reserved work in HTML.
const header = (
  <header style={headerStyle}>
    <div className="header-wrapper">
      <h1>{firstDay}</h1>
      <h2>{gettingStarted}</h2>
      <h3>{jsLib}</h3>
      <p>
        {studentName.firstName} {studentName.lastName} is {age} years old!
      </p>
      {result}
      <small>Learning Date: 6/29/2023</small>
    </div>
  </header>
);

const mainStyle = {
  backgroundColor: "lightgrey",
  padding: "1rem",
};

// Initial Array Variable
const techs = ["HTML", "CSS", "JS"];

// Map function to attach JSX into each item in array
// KEEP IN MIND - each child in a list should have a unique 'key' prop
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);

const main = (
  <main style={mainStyle}>
    <div className="main-wrapper">
      <p>
        What you need to get started:{" "}
        <strong>
          <em>react.js</em>
        </strong>
      </p>

      <ul>{techsFormatted}</ul>
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
