import react from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons"

const Menucard = props => (
    <Container>
        <Iconview>
            <Ionicons name={props.icon} size={25} color="#546bfb" />
        </Iconview>
        <Content>
            <Menubutton>{props.text}</Menubutton>
            <Menutext>{props.caption}</Menutext>
        </Content>
    </Container>
);

export default Menucard;

const Container = styled.View`
    flex-direction: row;
    margin: 15px 0;
`;

const Iconview = styled.View`
    width: 32px;
    height: 32px;
    justify-content: center;
    align-items: center;
`;

const Content = styled.View`
    padding-left: 20px;
`;

const Menubutton = styled.Text`
    font-size: 25px;
    font-weight: 600;
    color: #3c4560;
`;

const Menutext = styled.Text`
    font-size: 15px;
    color: #3c4560;
    margin-top: 5px;
    opacity: 0.6;
`;