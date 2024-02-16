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
import Icon from "react-native-vector-icons/MaterialCommunityIcons"


const Homestack = createStackNavigator({
    Home: Homescreen,
    Video: Videoscreen
});

Homestack.navigationOptions = {
    tabBarLabel: "Home",
    tabBarIcon: ({ focused }) => <Icon name="home" size={25} color={ focused ? "#4f81c7" : "#eae9e9" } />
};


const Coursestack = createStackNavigator({
    Courses: Coursescreen
});

Coursestack.navigationOptions = {
    tabBarLabel: "Course",
    tabBarIcon: ({ focused }) => <Icon name="book-open-variant" size={25} color={ focused ? "#4f81c7" : "#eae9e9" } />
};

const Videostack = createStackNavigator({
    Courses: Coursescreen
});

Videostack.navigationOptions = {
    tabBarLabel: "Video",
    tabBarIcon: ({ focused }) => <Icon name="video" size={25} color={ focused ? "#4f81c7" : "#eae9e9" } />
};


const Bottomtab = createBottomTabNavigator({ Homestack,Coursestack,Videostack }, { tabBarOptions:{showLabel:false} });

const MaterialBottomTab = createMaterialBottomTabNavigation(
    {
        Home: { screen: Homestack },
        Course: { screen: CourseStack },
        Videos: { screen: VideoStack }
    },
    {
        initialRouteName: "Home",
        activeColor: "#5FAB2F",
        inactiveColor: "#9D9D90",
        barStyle: { backgroungcolor: "#EEEEEE" },
        shifting: true
    }
)

export default createAppContainer(Bottomtab);