import React from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import styled from "styled-components";
import Medcard from "../components/Medcard";
import { Video } from "expo-av";

class Videoscreen extends React.Component{

  static NavigationOptions = {
    header: null
  }

  render(){
    const {navigation} = this.props;
    const data = navigation.getParam("video");
    const Medcarddata = navigation.getParam("datas");
    const Moviecarddata = navigation.getParam("movieData");


    return(
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VideoContainer>
            <Video source={{
              uri: "https://vod-progressive.akamaized.net/exp=1707821126~acl=%2Fvimeo-transcode-storage-prod-us-central1-h264-540p%2F01%2F4471%2F14%2F372355311%2F1547217810.mp4~hmac=7784f703754ddf915a927ca07d35a5cbcd553650823b7e505ba09b3fa9d91359/vimeo-transcode-storage-prod-us-central1-h264-540p/01/4471/14/372355311/1547217810.mp4"
            }} 
            shouldPlay reziseMode={cover} 
            useNativeControls={true} 
            style={{width: "100%",height: "100%"}} 
            />
          </VideoContainer>
          <VideoTitle>{data.title}</VideoTitle>
          <Medcardcontainer>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
              Medcarddata.map(
                (data, index) => {
                  <TouchableOpacity key={index} onpress={()=>{
                    this.props.navigation.push("Video",{
                      video: data,
                      datas: Medcarddata
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
      </Container>
    )
  };
}

export default Videoscreen;

const Container = styled.View`
  flex: 1;
`;

const VideoContainer = styled.View`
  width: 100%;
  height: 201px;
  background: black;
`;

const VideoTitle = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  color: #b4b4b4;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 600;
`;

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