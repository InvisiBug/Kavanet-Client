// Core
import React from "react";
import "bootstrap/dist/css/bootstrap.css"; // This is needed for the bootstrap rules, don't turn it off
import ReactDOM from "react-dom";
import App from "./App/App.jsx";

// CSS

import "./CSS/Button.css";
import "./CSS/Lights.css"; // deffo needed

// Render to page
ReactDOM.render(<App />, document.getElementById("root")); // Change this back to router if needed
