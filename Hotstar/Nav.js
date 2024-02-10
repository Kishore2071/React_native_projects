import React from "react";
// import { createAppContainer,createBottomTabNavigator,createStackNavigator } from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';
import Homescreen from "./screens/Homescreen";
import Videoscreen from "./screens/Videoscreen";
import Coursescreen from "./screens/Coursescreen";

const Homestack = createStackNavigator({
    Home: Homescreen ,
    Video: Videoscreen,
});

const Coursestack = createStackNavigator({
    Courses: Coursescreen
});

const Videostack = createStackNavigator({
    Courses: Coursescreen
});

const Bottomtab = createBottomTabNavigator({ Homestack,Coursestack })


export default createAppContainer(Bottomtab);