import React from 'react';
import { StatusBar,ScrollView} from 'react-native';
import styled from "styled-components"
import BigCard from './components/BigCard';

export default class App extends React.Component {
  render(){
    return (
      <Main>
        <ScrollView showsVerticalScrollIndicator={false}>
          <StatusBar hidden/>
          <Header>
            <Logo>Hotstar</Logo>
            <Profile />
          </Header>
          <BigCardContainer>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <BigCard image="https://frankeey.com/image/course/KXineZ1NFtQnHFq07QI8ndjzxD5ouTGu4r9S4Zwg.jpg"/>
              <BigCard image="https://frankeey.com/image/course/D4TH2shDtqF4wwtQFsEkd998nXqOr61LvPhraiQ7.jpg"/>
              <BigCard image="https://frankeey.com/image/course/qWuNiXOh7KMO0sxLSBEQIUX4T46v4oKAdsbA6DWt.png"/>
              <BigCard image="https://frankeey.com/image/course/QfIUfKnqRifDfegQewlKTAZQiFWIIkwobqQ90YKL.jpg"/>
            </ScrollView>
          </BigCardContainer>
        </ScrollView>
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
  top: 7px;
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

const BigCardContainer = styled.View`
  margin-top: 20px;
`;