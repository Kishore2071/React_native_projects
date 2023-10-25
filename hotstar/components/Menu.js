import React from "react";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

export default class Menu extends React.Component{
    
    state ={
        top:900
    }
    render(){
        return(
            <Container style={{position:"absolute",top: this.state.top}}>
                <Cover>
                    <LinearGradient 
                        colors={["rgba(255,148,115,1)","rgba(255,123,123,1)"]}
                        style={
                        {
                            width: "100%",
                            height: "100%",
                        }
                    }
                    />  
                </Cover>
                <Content />
            </Container>
        )
    }
}

const Container = styled.View`
    width: 100%;
    height: 100%;
    background: #F0EEEE;
`;

const Cover = styled.View`
    width: 100%;
    height: 150px;
`;

const Content = styled.View`

`;