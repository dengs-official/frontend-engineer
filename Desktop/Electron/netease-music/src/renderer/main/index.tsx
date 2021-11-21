import * as React from "react";
import ReactDOM from "react-dom";

const APP = () => <h1>Main Page</h1>;

ReactDOM.render(
  <React.StrictMode>
    <APP />
  </React.StrictMode>,
  document.getElementById("root")
);
