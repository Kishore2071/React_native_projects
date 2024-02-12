import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

class Videoscreen extends React.Component{

  static NavigationBarOptions = {
    header: null
  }

  render(){
    return(
      <Container>
        <TouchableOpacity onPress={() => {
          this.props.navigation.goback(); 
        }}>
          <Text>Videoscreen</Text>
        </TouchableOpacity>
      </Container>
    )
  };
}

export default Videoscreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

const Text = styled.Text``;