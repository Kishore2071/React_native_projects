import react from "react";
import { createAppContainer,createBottomTabNavigator,createStackNavigator } from "react-navigation";
import Homescreen from "./screens/Homescreen";
import Videoscreen from "./screens/Videoscreen";
import Coursescreen from "./screens/Coursescreen";

const Homestack = createStackNavigator({
    Home: Homescreen ,
    Video: Videoscreen
});

const Coursestack = createStackNavigator({
    Courses: Coursescreen
});

const Bottomtab = createBottomTabNavigator({ Homestack,Coursestack })


export default createAppContainer(Bottomtab);