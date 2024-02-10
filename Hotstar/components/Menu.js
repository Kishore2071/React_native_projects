import React from "react";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import Menucard from "./Menucard";

const screenheight = Dimensions.get("window").height

function mapStateToProps(state){
    return { menu: state.menu }
}

function mapDispatchToProps(dispatch){
    return{
        closemenu:()=>
            dispatch({
                type:"CLOSEMENU"
            })
    };
}

class Menu extends React.Component {
    
    state = {
        top: new Animated.Value(screenheight)
    };

    componentDidMount() {
        this.menu(); 
    }

    componentDidUpdate() {
        this.menu(); 
    }

    menu = ()=>{
        if(this.props.menu == "openmenu"){
            Animated.spring(this.state.top, { toValue: 150 ,useNativeDriver: false,}).start();
        }
        if(this.props.menu == "closemenu"){
            Animated.spring(this.state.top,{toValue: screenheight,useNativeDriver: false,}).start();
        }
    }

    render() {
        return (
            <Animatedcontainer style={{ position: "absolute", top: this.state.top , zIndex: 100 }}>
                <Cover>
                    <LinearGradient
                        colors={["rgba(255,148,115,1)", "rgba(255,123,123,1)"]}
                        style={{
                            width: "100%",
                            height: "100%"
                        }}
                    />
                    <Menutext>Menu</Menutext>
                </Cover>
                <TouchableOpacity
                    style={{
                        position: "absolute",
                        top:125,
                        left:"50%",
                        marginLeft:-22
                    }}
                    onPress={this.props.closemenu}
                >
                    <Closeview>
                        <Ionicons name="ios-close" size={35} color="blue" />
                    </Closeview>
                </TouchableOpacity>
                <Content>
                    <Menucard text="Account" icon="ios-settings" caption="Profile" />
                    <Menucard text="Log Out" icon="ios-log-out" caption="See You Soon" />
                </Content>
            </Animatedcontainer>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);

const Container = styled.View`
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 26px;
    overflow: hidden;
`;

const Animatedcontainer = Animated.createAnimatedComponent(Container)

const Cover = styled.View`
    width: 100%;
    height: 150px;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
    background: #FB8989;
`;

const Closeview = styled.View`
    width: 44px;
    height: 44px;
    border-radius: 22px;
    background-color: white;
    justify-content: center;
    align-items: center;
`;

const Content = styled.View`
    /* width: 100%;
    height: 553px;
    background: #F0EEEE; */

`;

const Menutext = styled.Text`
    position: absolute;
    font-size: 25px;
    font-weight: 600;
    color: white;
    top:65;
    left:42%;
`;

const Menubutton = styled.Text`
    font-size: 25px;
    color: #7918f5;
    width: 100%;
    height: 50px;
`;