import React from "react";
import { StatusBar, ScrollView, TouchableOpacity, Animated, Dimensions } from "react-native";
import styled from "styled-components";
import Bigcard from "../components/Bigcard";
import Medcard from "../components/Medcard";
import Menu from "../components/Menu";
import { Ionicons } from "@expo/vector-icons"
import { connect } from "react-redux";
import * as firebase from "firebase";  

const firebaseConfig = {
  apiKey: "AIzaSyCyfJOcL18jfiPxZNUphkxSHSNa68LbiEE",
  authDomain: "react-testing-7964e.firebaseapp.com",
  databaseURL: "https://react-testing-7964e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-testing-7964e",
  storageBucket: "react-testing-7964e.appspot.com",
  messagingSenderId: "916781081351",
  appId: "1:916781081351:web:9d557e54e018399d179ba2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


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

  componentDidMount(){
    console.disableYellowBox=true;
    this.Meddatabase = firebaseApp.database().ref().child("MedcardData");
    this.getMedCardData(this.Meddatabase);
  }

  getMedCardData = (database) => {
    this.database.on("value",snap => {
      let MedcardFData = [];
      snap.foreach(child => {
        MedcardData.push({
          title: child.val().title,
          image: child.val().image,
          video: child.val().video
        });
      });
      this.setState({
        MedcardData: MedcardFData
      })
      console.log(MedcardFData);
    });
  }
  
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
                  this.state.Medcarddata.map(
                    (data, index) => {
                      <TouchableOpacity key={index} onpress={()=>{
                        this.props.navigation.push("Video",{
                          video: data,
                          datas: Medcarddata,
                          movieData: Moviecarddata
                          });
                      }}>
                        return <Medcard image={data.image} />;
                      </TouchableOpacity>
                    }
                  )
                }
              </ScrollView>
            </Medcardcontainer>
            <Liketext>You May Also Like</Liketext>
            <Moviecardcontainer>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                  Moviecarddata.map(
                    (data, index) => {
                      <TouchableOpacity key={index} onpress={()=>{
                        this.props.navigation.push("Video",{
                          video: data,
                          datas: Medcarddata,
                          movieData: Moviecarddata
                          });
                      }}>
                        return <Moviecard image={data.image} />;
                      </TouchableOpacity>
                    }
                  )
                }
              </ScrollView>
            </Moviecardcontainer>
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
    image: "https://frankeey.com/image/course/qWuNiXOh7KMO0sxLSBEQIUX4T46v4oKAdsbA6DWt.png",
    title: "Bigg Boss Season 3"
  },
  {
    image: "https://frankeey.com/image/course/Bi6qLdjQeyRtu6LKj2MmbXbHUahni9nyx7lum2Ud.jpg",
    title: "2"
  },
  {
    image: "https://frankeey.com/image/course/D4TH2shDtqF4wwtQFsEkd998nXqOr61LvPhraiQ7.jpg",
    title: "3"
  },
  {
    image: "https://frankeey.com/image/course/DnWEvkqWt5YF1drI31VsX2BMHd8uukyxDaSvgY8B.png",
    title: "4"
  },
]

const Medcarddata = [
  {
    image: require("../assets/images/horzontalimg/1.png"),
    title: "Bigg Boss Season 3"
  },
  {
    image: require("../assets/images/horzontalimg/2.png"),
    title: "Bigg Boss Season 3"
  },
  {
    image: require("../assets/images/horzontalimg/3.png"),
    title: "Bigg Boss Season 3"
  },
  {
    image: require("../assets/images/horzontalimg/4.png"),
    title: "Bigg Boss Season 3"
  },
]

const Moviecarddata = [
  {
    image: require("../assets/images/horzontalimg/1.png"),
    title: "Bigg Boss Season 3"
  },
  {
    image: require("../assets/images/horzontalimg/2.png"),
    title: "Bigg Boss Season 3"
  },
  {
    image: require("../assets/images/horzontalimg/3.png"),
    title: "Bigg Boss Season 3"
  },
  {
    image: require("../assets/images/horzontalimg/4.png"),
    title: "Bigg Boss Season 3"
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
const Liketext = styled.Text`
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
  margin-left: 5px;
`;

const Moviecardcontainer = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 5px;
`;