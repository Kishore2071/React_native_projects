import React from "react";
import { 
        createAppContainer,
        createBottomTabNavigator,
        createStackNavigator 
    } from "react-navigation";
import Homescreen from "./screens/Homescreen";
import Videoscreen from "./screens/Videoscreen";
import Coursescreen from "./screens/Coursescreen";
import { Ionicons } from "@expo/vector-icons";


const Homestack = createStackNavigator({
    Home: Homescreen,
    Video: Videoscreen
});

Homestack.navigationOptions = {
    tabBarLabel: "Home",
    tabBarIcon: ({ focused }) => <Ionicons name="ios-home" size={25} color={ focused ? "#4f81c7" : "#eae9e9" } />
};


const Coursestack = createStackNavigator({
    Courses: Coursescreen
});

Coursestack.navigationOptions = {
    tabBarLabel: "Course",
    tabBarIcon: ({ focused }) => <Ionicons name="ios-home" size={25} color={ focused ? "#4f81c7" : "#eae9e9" } />
};

const Videostack = createStackNavigator({
    Courses: Coursescreen
});

Videostack.navigationOptions = {
    tabBarLabel: "Video",
    tabBarIcon: ({ focused }) => <Ionicons name="ios-home" size={25} color={ focused ? "#4f81c7" : "#eae9e9" } />
};


const Bottomtab = createBottomTabNavigator({ Homestack,Coursestack,Videostack }, { tabBarOptions:{showLabel:false} });


export default createAppContainer(Bottomtab);