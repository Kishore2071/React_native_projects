import React from "react";
import styled from "styled-components";

class Coursescreen extends React.Component{
  render(){
    return(
      <Container>
        <Text>Coursescreen</Text>
      </Container>
    )
  }
}

export default Coursescreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

const Text = styled.Text``;