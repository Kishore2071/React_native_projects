import React from "react";
import { createstore } from "redux";
import { Provider } from "react-redux";
import Homescreen from "./screens/Homescreen";

const reducer = (state = { menu: "closemenu" }, command) => {
    if (command.type == "OPENMENU") {
        return { menu: "openmenu" };
    } else if (command.type == "CLOSEMENU") {
        return { menu: "closemenu" };
    }
    return state;
}
const database = createstore(reducer);

const App = () => (
    <Provider store={database}>
        <Homescreen />
    </Provider>
);

export default App;;