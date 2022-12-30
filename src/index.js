import React from "react";
import ReactDom from "react-dom";
import { applyMiddleware} from "redux";
import App from "./App";
import thunk from "redux-thunk";
import reducers from "./redux/reducers";
import { Provider } from "react-redux";
import { legacy_createStore as createStore} from 'redux'

const store=createStore(reducers,applyMiddleware(thunk))

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector("#root"))