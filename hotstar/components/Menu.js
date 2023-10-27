import React from "react";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";
import { Animated } from "react-native";

export default class Menu extends React.Component{
    
    state ={

        top: new Animated.Value(900)

    };

    componentDidMount(){

        Animated.spring(this.state.top, { toValue: 0 }).start();
    
    }
    
    render(){
        return(
            <AnimatedContainer style={{position:"absolute",top: this.state.top , zIndex:100 }}>
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
            </AnimatedContainer>
        )
    }
}

const Container = styled.View`
    width: 100%;
    height: 100%;
    background: #F0EEEE;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container)

const Cover = styled.View`
    width: 100%;
    height: 150px;
`;

const Content = styled.View`

`;