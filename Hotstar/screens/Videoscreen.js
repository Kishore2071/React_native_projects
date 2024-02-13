import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

class Videoscreen extends React.Component{

  static NavigationBarOptions = {
    header: null
  }

  render(){
    const {navigation} = this.props;
    const data = navigation.getParam("video");

    return(
      <Container>
        <VideoContainer>
          <Video source={{
            uri: "https://vod-progressive.akamaized.net/exp=1707821126~acl=%2Fvimeo-transcode-storage-prod-us-central1-h264-540p%2F01%2F4471%2F14%2F372355311%2F1547217810.mp4~hmac=7784f703754ddf915a927ca07d35a5cbcd553650823b7e505ba09b3fa9d91359/vimeo-transcode-storage-prod-us-central1-h264-540p/01/4471/14/372355311/1547217810.mp4"
          }} 
          shouldPlay reziseMode={cover} 
          useNativeControls={true} 
          style={{width: "100%",height: "100%"}} 
          />
        </VideoContainer>
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