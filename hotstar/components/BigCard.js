import React from "react";
import styled from 'styled-components'

export default class BigCard extends React.Component {
    render(){
        return <Container />;
    }
}

const Container = styled.View`
    width: 368px;
    height: 206px;
    border-radius: 10px;
    background-color: white;
`;