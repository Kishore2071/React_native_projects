import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from "styled-components";

export default class App extends React.Component {
  render(){
    return (
      <Main>
        <StatusBar hidden/>
        <Header>
          <Logo>Hotstar</Logo>
          <Profile />
        </Header>
      </Main>
    );
  }
}

const Main = styled.View`
  flex: 1;
  background-color: #E5E5E5;

`;

const Header = styled.View`
  height: 56px;
  width: 100%;
  background-color: #FFF;
`;

const Profile = styled.Image`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 40px;
  height: 40px;
  background: #D9D9D9;
  border-radius: 20px;
`;

const Logo = styled.Text`
  margin-top: 10px;
  margin-left: 10px;
  color: black;
  font-size: 25px;
`;