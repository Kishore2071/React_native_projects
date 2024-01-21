import React from "react";
import { createStore } from 'redux';
import { Provider } from "react-redux";
import Homescreen from "./screens/Homescreen";
import Bottomtab from "./Nav.js";

const reducer = (state = { menu: "openmenu" }, action) => {
    
    // if (action.type == "OPENMENU") {
    //     return { menu: "openmenu" };
    // } else if (action.type == "CLOSEMENU") {
    //     return { menu: "closemenu" };
    // }
    // return state;

    switch(action.type){
        case "OPENMENU":
            return { menu: "openmenu" };
        case "CLOSEMENU":
            return { menu: "closemenu" };
        default:
            return state;
    }
}
const database = createStore(reducer);

const App = () => (
    <Provider store={database}>
        <Bottomtab />
    </Provider>
);

export default App;