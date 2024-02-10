import React from "react";
import styled from "styled-components";

class Videoscreen extends React.Component{
  render(){
    return(
      <Container>
        <Text>Videoscreen</Text>
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