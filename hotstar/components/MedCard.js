import React from "react";
import styled from "styled-components"
import { LinearGradient } from "expo-linear-gradient";

class MedCard extends React.Component{
    render(){
        return(
            <Container>
                <Image source={{uri: this.props.image}}/>
                <LinearGradient 
                    colors={["rgba(0,0,0,0)","rgba(0,0,0,0.8)"]}
                    style={
                        {
                            position: "absolute",
                            width: "100%",
                            height: "50%",
                            top: 70
                        }
                    }
                />      
                <Text>Some Text</Text>      
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
    margin-left: 20px;
`;

const Image = styled.Image`
    width: 100%;
    height: 100%;
`;

const Text = styled.Text`
    position: absolute;
    font-size: 18px;
    font-weight: 500;
    color: white;
    top: 100;
    left: 15;
`;