// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React from "react";
import { StyleSheet,View, Text, Image } from "react-native";
import SomeText from "./components/SomeText";

export default class App extends React.Component{
  render() {
    return (

      <View style={styles.classname}>
        <SomeText name="Hello"/>
        <SomeText name="World"/>
        <SomeText name="HI"/>
        <Image source={require("./assets/instagram.png")} style={{height:100 , width:100}}/>
        <Image source={{uri:"https://frankeey.com/image/course/qWuNiXOh7KMO0sxLSBEQIUX4T46v4oKAdsbA6DWt.png"}} style={{height:100 , width:100}}/>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  classname: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
});