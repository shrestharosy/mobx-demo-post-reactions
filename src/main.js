import React from "react";
import ReactDOM from "react-dom";
import './css/main.css'
import Post from "./components/Post";
import storeInstance from './store/Store'

export const StoreContext = React.createContext();

ReactDOM.render(
        <StoreContext.Provider value={storeInstance}>
            <Post />
        </StoreContext.Provider >
    , document.getElementById('app'));

if (module.hot) {
    // enables hot module replacement if plugin is installed
    module.hot.accept();
}