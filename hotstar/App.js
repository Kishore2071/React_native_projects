import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from "styled-components";

export default class App extends React.Component {
  render(){
    return (
      <Main>
        <Sometext>Opening App.js to start working on your app!</Sometext>
      </Main>
    );
  }
}

const Main = styled.View`
  flex: 1;
  background-color: 'lightgray';
  align-items: 'center';
  justify-content: 'center';
`;

const Sometext = styled.Text`
  margin-top:100px;
  font-size:20px;
`;