import React from "react";
import styled from 'styled-components'

export default class BigCard extends React.Component {
    render(){
        return (
            <Container>
                <Image source={{ uri : "https://frankeey.com/image/course/KXineZ1NFtQnHFq07QI8ndjzxD5ouTGu4r9S4Zwg.jpg"}}/>
            </Container>
        );
    }
}

const Container = styled.View`
    width: 338px;
    height: 180px;
    border-radius: 10px;
    background-color: white;
    overflow: hidden;
`;

const Image = styled.Image`
    width: 100%;
    height: 100%;
`;