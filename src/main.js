import React from "react";
import ReactDOM from "react-dom";
import './css/main.css'
import Dashboard from "./components/Dashboard";

ReactDOM.render(<Dashboard />, document.getElementById('app'));

if (module.hot) {
    // enables hot module replacement if plugin is installed
    module.hot.accept();
}