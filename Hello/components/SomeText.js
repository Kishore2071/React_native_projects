import React from "react";
import { StyleSheet, Text } from "react-native";

export default class SomeText extends React.Component{
  render() {

    return <Text style={styles.textstyle}>Hello World</Text>;

  }
}

const styles = StyleSheet.create({
  textstyle:{
    fontSize:20,
    color: 'white',
    backgroundColor: 'orange',
    paddingHorizontal:10,
    paddingVertical:15,
    marginTop:5
  },
});