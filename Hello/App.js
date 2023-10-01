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
import { StyleSheet,View, Text } from "react-native";
import SomeText from "./components/SomeText";

export default class App extends React.Component{
  render() {
    return (

      <View style={styles.classname}>
        <SomeText/>
        <SomeText/>
        <SomeText/>
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