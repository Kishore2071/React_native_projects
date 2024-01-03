import React from "react";
import { StatusBar, ScrollView } from "react-native";
import styled from "styled-components";
import Bigcard from "./components/Bigcard";

export default class App extends React.Component {
  render() {
    return (
      <Main>
        <ScrollView showsVerticalScrollIndicator={false}>
          <StatusBar hidden />
          <Header>
            <Logo>HOTSTAR</Logo>
            <Profile />
          </Header>
          <Bigcardcontainer>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <Bigcard image="https://frankeey.com/image/course/qWuNiXOh7KMO0sxLSBEQIUX4T46v4oKAdsbA6DWt.png" />
              <Bigcard image="https://frankeey.com/image/course/Bi6qLdjQeyRtu6LKj2MmbXbHUahni9nyx7lum2Ud.jpg" />
              <Bigcard image="https://frankeey.com/image/course/D4TH2shDtqF4wwtQFsEkd998nXqOr61LvPhraiQ7.jpg" />
              <Bigcard image="https://frankeey.com/image/course/DnWEvkqWt5YF1drI31VsX2BMHd8uukyxDaSvgY8B.png" />
            </ScrollView>
          </Bigcardcontainer>
        </ScrollView>
      </Main>
    );
  }
}

const Main = styled.View`
  flex: 1;
  background-color: #e5e5e5;
`;

const Header = styled.View`
  width: 100%;
  height: 56px;
  background: white;
`;

const Logo = styled.Text`
  margin-left: 15px;
  color: black;
  margin-top: 10px;
  font-size: 25px;
`;

const Profile = styled.Image`
  position: absolute;
  top: 7px;
  left: 360px;
  width: 40px;
  height: 40px;
  background: #c4c4c4;
  border-radius: 20px;
`;

const Bigcardcontainer = styled.View`
  margin-top: 20px;
`;
