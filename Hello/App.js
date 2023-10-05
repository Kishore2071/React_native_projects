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
import { StyleSheet,View, Text, Image,TouchableOpacity } from "react-native";
import SomeText from "./components/SomeText";

export default class App extends React.Component{

  state={
    text:"Logged out",
    ex:"as"
  };

  render() {
    return (

      <View style={styles.classname}>

        <TouchableOpacity 
          onPress={() => {
            this.setState({
              text:"Logged in"
            });
          }}
          >
          <SomeText name="Login"/>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={ ()=> {
            this.setState({
              text:"Logged out"
            });
          }}
          >
          <SomeText name="Logout"/>
        </TouchableOpacity>

        <Text style={{color:"white",fontSize:20,marginTop:10}}>
          {this.state.text}
        </Text>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  classname: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      },
});