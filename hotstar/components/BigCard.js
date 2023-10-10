import React from "react";
import styled from 'styled-components'

export default class BigCard extends React.Component {
    render(){
        return (
            <Container>
                <Image 
                    source={{ 
                        uri : this.props.image
                    }}/>
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
    margin-left: 20px;
`;

const Image = styled.Image`
    width: 100%;
    height: 100%;
`;