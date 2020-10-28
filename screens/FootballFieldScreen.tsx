import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { footballFieldStyle } from "./styles/FootballFieldScreenStyle";

import image from "../assets/teren-01.png";
import jersey from "../assets/jersey.png";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../utils/Dimensions";
import RenderPlayers, { GoalKeeper, Defenders, Midfielders, Attackers } from "./footballFieldUtils/RenderPlayers";

export default function FootballFieldScreen() {
  return (
    <View style={footballFieldStyle.container}>
      <ImageBackground source={image} style={footballFieldStyle.image}>
        <View style={{ position: "relative" }}>
          <Text style={footballFieldStyle.text}>Inside</Text>
         <RenderPlayers />

          {<Text>screen width is {SCREEN_WIDTH}</Text>}
          {<Text>screen height is {SCREEN_HEIGHT}</Text>}
        </View>
      </ImageBackground>
    </View>
  );
}

