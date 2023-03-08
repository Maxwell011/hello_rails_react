// Entry point for the build script in your package.json
// import "@hotwired/turbo-rails";
// import "./controllers";
import { createRoot } from "react-dom/client";
import React from 'react';

import App  from './components/App';


const root = createRoot(document.getElementById("root"));
root.render(
 <App />
);

// import "@hotwired/turbo-rails";
// import "./controllers";
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <App />
// );