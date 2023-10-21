import React from "react";
import styled from "styled-components"
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons"

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
                <TextContainer>
                    <Ionicons name="play" color="white" size={18}/> 
                    <Text>Website course</Text>   
                </TextContainer>   
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
    font-size: 18px;
    font-weight: 500;
    color: white;
    padding-left:10px;
`;

const TextContainer = styled.View`
    position: absolute;
    top: 100px;
    left: 15px;
    flex-direction: row;
    align-items: center;
`;