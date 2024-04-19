import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {className:"heading"}, "Hello World!!!");
const title = <h1 className="title">Namaste React</h1>;

const HeadingComponent = () => {
  return (
    <div id="container">
      {title}
      <h2 className="description">All About ReactJS.</h2>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(HeadingComponent());
