import React from "react";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons"

export default class Medcard extends React.Component {
    render() {
        return (
            <Container>
                <Image source={this.props.image} />
                <LinearGradient
                    colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.8)"]}
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "50%",
                        top: 70
                    }}
                />

                <Textcontainer>
                    <Ionicons name="ios-play" color="white" />
                    <Text>S4 E55 - 16 AUG</Text>
                </Textcontainer>

            </Container>
        );
    }
}

const Container = styled.View`
    width: 249px;
    height: 141px;
    border-radius: 10px;    
    background-color: white;
    overflow: hidden;
    margin-left: 10px;
`;

const Image = styled.Image`
    width: 100%;
    height: 100%;
    z-index: -5;
`;

const Text = styled.Text`
    font-size: 17px;
    color: white;
    padding-left: 10px;
`;

const Textcontainer =styled.View`
    position: absolute;
    top: 105;
    left: 15;
    flex-direction:row;
    align-items: center;
`;