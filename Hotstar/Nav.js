import react from "react";
import { createAppContainer,createBottomTabNavigator,createStackNavigator } from "react-navigation";
import Homescreen from "./screens/Homescreen";

const Homestack = createStackNavigator({
    Home: Homescreen
})

const Bottomtab = createBottomTabNavigator({ Homestack })


export default createAppContainer(Bottomtab);