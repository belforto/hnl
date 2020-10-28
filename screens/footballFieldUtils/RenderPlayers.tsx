import React from "react";
import { View, Image, Text } from "react-native";
import jersey from "../../assets/jersey.png";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../../utils/Dimensions";
import { footballFieldStyle } from "../styles/FootballFieldScreenStyle";
import Player from "./Player";

export default function RenderPlayers() {
  return (
    <View>
      {GoalKeeper()}
      {Defenders()}
      {Midfielders()}
      {Attackers()}
    </View>
  );
}

export const GoalKeeper = () => {
  {
    return (
      <View>
        <Player
          imgSource={jersey}
          position={getPositionOnScreen442("GoalKeeper")}
        />
      </View>
    );
  }
};

export const Midfielders = () => {
  {
    return (
      <View>
        <Player
          imgSource={jersey}
          position={getPositionOnScreen442("Midfielders")[0]}
        />
        <Player
          imgSource={jersey}
          position={getPositionOnScreen442("Midfielders")[1]}
        />
        <Player
          imgSource={jersey}
          position={getPositionOnScreen442("Midfielders")[2]}
        />
        <Player
          imgSource={jersey}
          position={getPositionOnScreen442("Midfielders")[3]}
        />
       
      </View>
    );
  }
};

export const Attackers = () => {
  {
    return (
      <View>
        <Player
          imgSource={jersey}
          position={getPositionOnScreen442("Attackers")[0]}
        />
        <Player
          imgSource={jersey}
          position={getPositionOnScreen442("Attackers")[1]}
        /> 
      </View>
    );
  }
};

export const Defenders = () => {
  {
    return (
      <View>
       <Player
          imgSource={jersey}
          position={getPositionOnScreen442("Defenders")[0]}
        />
        <Player
          imgSource={jersey}
          position={getPositionOnScreen442("Defenders")[1]}
        /> 
        <Player
          imgSource={jersey}
          position={getPositionOnScreen442("Defenders")[2]}
        />
        <Player
          imgSource={jersey}
          position={getPositionOnScreen442("Defenders")[3]}
        /> 
      </View>
    );
  }
};

export const getPositionOnScreen442 = (position: string) => {
  if (position === "GoalKeeper")
    return { top: SCREEN_HEIGHT / 4.7, left: SCREEN_WIDTH * 2 * 0.21 ,position: "absolute",};
  if (position === "Defenders")
    return [
      { top: 300, left: SCREEN_WIDTH * 1 * 0.16 ,position: "absolute",},
      { top: 300, left: SCREEN_WIDTH * 2 * 0.16 ,position: "absolute",},
      { top: 300, left: SCREEN_WIDTH * 3 * 0.16 ,position: "absolute",},
      { top: 300, left: SCREEN_WIDTH * 4 * 0.16 ,position: "absolute",}
    ];

  if (position === "Attackers")
    return [
      { top: 500, left: SCREEN_WIDTH * 2 * 0.16 ,position: "absolute",},
      { top: 500, left: SCREEN_WIDTH * 3.5 * 0.16 ,position: "absolute",},
    ];
  if (position === "Midfielders")
    return [
      { top: SCREEN_HEIGHT / 2.0925, left: SCREEN_WIDTH * 0.16 ,position: "absolute",},
      { top: SCREEN_HEIGHT / 2.0925, left: SCREEN_WIDTH * 2 * 0.16 ,position: "absolute",},
      { top: SCREEN_HEIGHT / 2.0925, left: SCREEN_WIDTH * 3 * 0.16 ,position: "absolute",},
      { top: SCREEN_HEIGHT / 2.0925, left: SCREEN_WIDTH * 4 * 0.16 ,position: "absolute",},
    ];
};
