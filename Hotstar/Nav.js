import React from "react";
// import { 
//         createAppContainer,
//         createBottomTabNavigator,
//         createStackNavigator 
//     } from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from "./screens/Homescreen";
import Videoscreen from "./screens/Videoscreen";
import Coursescreen from "./screens/Coursescreen";
import { Ionicons } from "@expo/vector-icons";

const Homestack = createNativeStackNavigator();
// const Homestack = createStackNavigator({
//     Home: Homescreen,
//     Video: Videoscreen
// });

Homestack.navigationOptions = {
    tabBarLabel: "Home",
    tabBarIcon: ({ focused }) => <Ionicons name="ios-home" size={25} color={ focused ? "#4f81c7" : "#eae9e9" } />
};

const Coursestack = createNativeStackNavigator();
// const Coursestack = createStackNavigator({
//     Courses: Coursescreen
// });

Coursestack.navigationOptions = {
    tabBarLabel: "Course",
    tabBarIcon: ({ focused }) => <Ionicons name="ios-home" size={25} color={ focused ? "#4f81c7" : "#eae9e9" } />
};

const Videostack = createNativeStackNavigator();
// const Videostack = createStackNavigator({
//     Courses: Coursescreen
// });

Videostack.navigationOptions = {
    tabBarLabel: "Video",
    tabBarIcon: ({ focused }) => <Ionicons name="ios-home" size={25} color={ focused ? "#4f81c7" : "#eae9e9" } />
};


// const Bottomtab = createBottomTabNavigator({ Homestack,Coursestack,Videostack }, { tabBarOptions:{showLabel:false} });
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Homestack} 
        options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ focused }) => <Ionicons name="ios-home" size={25} color={ focused ? "#4f81c7" : "#eae9e9" } />
            }} />
      <Tab.Screen name="Course" component={Coursestack} 
            options={{
            tabBarLabel: "Course",
            tabBarIcon: ({ focused }) => <Ionicons name="ios-home" size={25} color={ focused ? "#4f81c7" : "#eae9e9" } />
            }} />
      <Tab.Screen name="Video" component={Videostack} 
        options={{
            tabBarLabel: "Video",
            tabBarIcon: ({ focused }) => <Ionicons name="ios-home" size={25} color={ focused ? "#4f81c7" : "#eae9e9" } />
            }} />
    </Tab.Navigator>
  );
}

MyTabs();

export default function App() {
    return (
    
      <NavigationContainer>
        <Homestack.Navigator>
            <Homestack.Screen name="Home" component={Homescreen} options={{ title: 'Overview' }}/>
            <Homestack.Screen name="Video" component={Videoscreen} />
        </Homestack.Navigator>
        <Coursestack.Navigator>
            <Coursestack.Screen name="Courses" component={Coursescreen} />
        </Coursestack.Navigator>
        <Stack.Navigator>
            <Stack.Screen name="Courses" component={Coursescreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

// export default createAppContainer(Bottomtab);