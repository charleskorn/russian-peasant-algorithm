require("../styles/app.scss");

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import russianPeasantApp from "./reducers";
import Root from "./ui/root";

let store = createStore(russianPeasantApp, window.devToolsExtension && window.devToolsExtension());

render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById("content")
);
