import React from "react";
import styled from "styled-components"

class MedCard extends React.Component{
    render(){
        return(
            <Container>
                <Image source={{uri: this.props.image}}/>
            </Container>
        )
    }
}


export default MedCard;

const Container = styled.View`
    width: 249px;
    height: 141px;
    border-radius: 10px;
    background-color: #FFF;
    overflow: hidden;
    margin: 5px;
`;

const Image = styled.Image`
    width: 100%;
    height: 100%;
`;