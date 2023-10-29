import React from 'react';
import { StatusBar,ScrollView, TouchableOpacity } from 'react-native';
import styled from "styled-components";
import BigCard from './components/BigCard';
import MedCard from './components/MedCard';
import { Ionicons } from "@expo/vector-icons";
import Menu from './components/Menu';


export default class App extends React.Component {


  render(){
    return (
      <Main>
        <Menu/>
        <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
          <StatusBar hidden/>
          <Header>
            <TouchableOpacity
              onPress={()=>{
                console.log("Menu Icon");
              }}
              style={{
                position: 'absolute',
                top: 13,
                left: 10,
                zIndex: 100
              }}
            >
              <Ionicons name="ios-menu" size={30} color="grey" />
            </TouchableOpacity>
            <Logo/>
            <Profile />
          </Header>
          <BigCardContainer>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              
              {
                BigCardData.map(
                
                (data,index)=>( 
                  <BigCard key={index} image={data.image} />
                  )
                  
                )
              }

            </ScrollView>
          </BigCardContainer>
          <ContinueText>Continue watching</ContinueText>
          <MedCardContainer>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {
                MedCardData.map((data,index) => (
                  <MedCard key={index} image={data.image}/>
                ))
              }
            </ScrollView>
          </MedCardContainer>
          
        </ScrollView>
      </Main>
    );
  }
}


const MedCardContainer = styled.View`
  margin-top: 20px; 
  margin-left: 10px;
`;

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
  margin-top: 18px;
  margin-left: 50px;
  width: 85px;
  height: 20px;
  background: lightgray;
  border-radius: 10px;
`;

const BigCardContainer = styled.View`
  margin-top: 20px;
`;

const BigCardData =[

  {

    image: "https://frankeey.com/image/course/KXineZ1NFtQnHFq07QI8ndjzxD5ouTGu4r9S4Zwg.jpg"

  },
  {

    image:"https://frankeey.com/image/course/D4TH2shDtqF4wwtQFsEkd998nXqOr61LvPhraiQ7.jpg"

  },
  {

    image:"https://frankeey.com/image/course/qWuNiXOh7KMO0sxLSBEQIUX4T46v4oKAdsbA6DWt.png"

  },
  {

    image:"https://frankeey.com/image/course/QfIUfKnqRifDfegQewlKTAZQiFWIIkwobqQ90YKL.jpg"

  },

];

const MedCardData =[

  
  {

    image:"https://frankeey.com/image/course/qWuNiXOh7KMO0sxLSBEQIUX4T46v4oKAdsbA6DWt.png"

  },
  {

    image: "https://frankeey.com/image/course/KXineZ1NFtQnHFq07QI8ndjzxD5ouTGu4r9S4Zwg.jpg"

  },
  {

    image:"https://frankeey.com/image/course/D4TH2shDtqF4wwtQFsEkd998nXqOr61LvPhraiQ7.jpg"

  },

];

const ContinueText = styled.Text`
  margin-top: 20px;
  margin-left: 20px;
  color: #000;
  font-size: 17px;
  font-weight: 700;
  text-transform: uppercase;
`;
