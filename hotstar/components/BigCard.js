import React from "react";
import styled from 'styled-components'

export default class BigCard extends React.Component {
    render(){
        return <Container />;
    }
}

const Container = styled.View`
    width: 338px;
    height: 180px;
    border-radius: 10px;
    background-color: white;
`;