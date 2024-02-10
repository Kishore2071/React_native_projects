import React from "react";
import { StatusBar, ScrollView, TouchableOpacity, Animated, Dimensions } from "react-native";
import styled from "styled-components";
import Bigcard from "../components/Bigcard";
import Medcard from "../components/Medcard";
import Menu from "../components/Menu";
import { Ionicons } from "@expo/vector-icons"
import { connect } from "react-redux";


const screenheight = Dimensions.get("window").height;

function mapStateToProps(state) {
  return { menu: state.menu }
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () => dispatch({
      type: "OPENMENU"
    })
  }
}



class Homescreen extends React.Component {

  static navigatonoptions = {
    Header: null
  };

  state = {
    left: 10,
    top:new Animated.Value(screenheight),
    opacity:new Animated.Value(0)
  };

  componentDidUpdate(){
    this.blackscreen()
  }

  blackscreen(){
    if(this.props.menu == "openmenu"){
      Animated.timing(this.state.top,{toValue:0,duration:10}).start();
      Animated.timing(this.state.opacity,{toValue:0.6,duration:500}).start();
    }
    if(this.props.menu == "closemenu"){
      Animated.timing(this.state.top,{toValue:screenheight,duration:10}).start();
      Animated.spring(this.state.opacity,{toValue:0}).start();

    }
  }

  render() {

    return (
      <Root>
        <Main>
          <ScrollView showsVerticalScrollIndicator={false}>
            <StatusBar hidden />
            <Header>
              <TouchableOpacity
                style={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  zIndex: 100
                }}
                onPress={this.props.openMenu}
              >
                <Ionicons name="menu" color="black" size={35} />
              </TouchableOpacity>
              <Logo>HOTSTAR</Logo>
              <Profile />
            </Header>
            <Bigcardcontainer>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                  Bigcarddata.map
                    (
                      (data, index) => {
                        return <Bigcard key={index} image={data.image} />;
                      }
                    )
                }
              </ScrollView>
            </Bigcardcontainer>
            <Continuetext>
              Continue Watching
            </Continuetext>
            <Medcardcontainer>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                  Medcarddata.map(
                    (data, index) => {
                      <TouchableOpacity key={index} onpress={()=>{
                        this.props.navigation.push("Video");
                      }}>
                        return <Medcard image={data.image} />;
                      </TouchableOpacity>
                    }
                  )
                }
              </ScrollView>
            </Medcardcontainer>
          </ScrollView>
        </Main>
        <Animatedblack style={{ top: this.state.top, opacity: this.state.opacity }} /> 
        <Menu />
      </Root>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homescreen);

const Main = styled.View`
  flex: 1;
  background-color: #e5e5e5;
`;

const Root = styled.View`
  flex: 1;
`;

const Black = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.6;
`;

const Animatedblack = Animated.createAnimatedComponent(Black);

const Header = styled.View`
  width: 100%;
  height: 56px;
  background: white;
`;

const Logo = styled.Text`
  margin-left: 60px;
  color: black;
  margin-top: 10px;
  font-size: 25px;
`;

const Profile = styled.Image`
  position: absolute;
  top: 7px;
  left: 360px;
  width: 40px;
  height: 40px;
  background: #c4c4c4;
  border-radius: 20px;
`;

const Bigcardcontainer = styled.View`
  margin-top: 20px;
`;

const Bigcarddata = [
  {
    image: "https://frankeey.com/image/course/qWuNiXOh7KMO0sxLSBEQIUX4T46v4oKAdsbA6DWt.png"
  },
  {
    image: "https://frankeey.com/image/course/Bi6qLdjQeyRtu6LKj2MmbXbHUahni9nyx7lum2Ud.jpg"
  },
  {
    image: "https://frankeey.com/image/course/D4TH2shDtqF4wwtQFsEkd998nXqOr61LvPhraiQ7.jpg"
  },
  {
    image: "https://frankeey.com/image/course/DnWEvkqWt5YF1drI31VsX2BMHd8uukyxDaSvgY8B.png"
  },
]

const Medcarddata = [
  {
    image: require("../assets/images/horzontalimg/1.png")
  },
  {
    image: require("../assets/images/horzontalimg/2.png")
  },
  {
    image: require("../assets/images/horzontalimg/3.png")
  },
  {
    image: require("../assets/images/horzontalimg/4.png")
  },
]
const Continuetext = styled.Text`
  margin-top: 10px;
  margin-left: 15px;
  width: 200px;
  height: 26px;
  flex-shrink: 0;
  color: #000;
  font-size: 21px;
  font-weight: 700;
`;

const Medcardcontainer = styled.View`
  margin-top: 20px;
`;