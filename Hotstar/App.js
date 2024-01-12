import React from "react";
// import { createstore } from "redux";
import { createStore } from 'redux';
import { Provider } from "react-redux";
import Homescreen from "./screens/Homescreen";

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
        <Homescreen />
    </Provider>
);

export default App;