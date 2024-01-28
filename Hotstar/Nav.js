import react from "react";
import { createAppContainer,createBottomTabNavigator,createStackNavigator } from "react-navigation";
import Homescreen from "./screens/Homescreen";
import Videoscreen from "./screens/Videoscreen";

const Homestack = createStackNavigator({
    Home: Homescreen
})

const Bottomtab = createBottomTabNavigator({ Homestack,Videoscreen })


export default createAppContainer(Bottomtab);