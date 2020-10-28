import { StyleSheet } from "react-native";
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../../utils/Dimensions";
export const footballFieldStyle = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'column',
    backgroundColor:"white"
  },
  image: {
    flex: 1,
    // resizeMode: 'cover',
    // justifyContent: 'center',
    height: "80%"
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  },
  sprite: {
    width: SCREEN_WIDTH/7.47272727273,
    height: SCREEN_HEIGHT/15.2181818182,
    //position: "absolute",
    
  },
  touchable: {
    width: SCREEN_WIDTH/7.47272727273,
    height: SCREEN_HEIGHT/15.2181818182,
    position: "absolute",
    backgroundColor:"transparent"
    
  }
});
