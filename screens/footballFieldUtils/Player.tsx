import React from "react";
import { View, Image, TouchableOpacity, Text, TouchableHighlight } from "react-native";
import { footballFieldStyle } from "../styles/FootballFieldScreenStyle";
import { getPositionOnScreen442 } from "./RenderPlayers";

export default function Player({ imgSource, position,playerObject }) {
  let namePosition = {  width:111 };

  console.log(namePosition,position,);
  return (
    <View>
         <TouchableOpacity
        onPress={()=> console.log("dd")}
        style={[footballFieldStyle.touchable,position,{ flexDirection:'column'}]} >
        
     
     <Image source={imgSource} style={[footballFieldStyle.sprite]} />
      <Text style={[namePosition]}> Captain </Text>
      <Text style={[namePosition]}> livaković </Text>
     
     
       </TouchableOpacity>
    </View>
  );
}
