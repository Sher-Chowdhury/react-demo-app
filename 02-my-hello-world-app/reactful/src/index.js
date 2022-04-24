import React from 'react';
import ReactDOM from "react-dom/client";

import App from "./components/app";

const container = document.getElementById("mountNode");
ReactDOM.hydrateRoot(container, <App />);