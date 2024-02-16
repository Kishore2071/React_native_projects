import React from "react";
import styled from "styled-components";

export default class MovieCard extends React.Component {
    render() {
        return (
            <Container>

                <Image source={this.props.image} />

            </Container>
        );
    }
}

const Container = styled.View`
    width: 130px;
    height: 172px;
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