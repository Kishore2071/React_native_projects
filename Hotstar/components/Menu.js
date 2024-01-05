import react from "react";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

export default class Menu extends react.Component {
    state = {
        top:900
    };
    render() {
        return (
            <Container>
                <Cover>
                    <LinearGradient 
                        colors={["rgba(255,148,115,1)","rgba(255,123,123,1)"]}
                        style={{
                            width:"100%",
                            height:"100%"
                        }}
                    />
                </Cover>
                <Content />
            </Container>
        );
    }
}

const Container = styled.View`
    width: 100%;
    height: 100%;
    background: white;
`;

const Cover = styled.View`
    width: 100%;
    height: 206px;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
    background: #FB8989;
`;

const Content = styled.View`
    width: 100%;
    height: 553px;
    background: #F0EEEE;

`;