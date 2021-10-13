import React from "react";
import { View, Text } from "react-native";
import Album from "../../components/Album";
import { album } from "./helper";

interface Props {
  //receive from native
  message: string;
}
const FavoriteScreen = (props: Props) => {
  console.log("----", props);

  return (
    <View
      style={{
        flex: 1,
        // boxs
        // flexDirection: "column",
        // justifyContent: "space-between",
      }}>
      <Album {...{ album }} />
    </View>
  );
};

export default FavoriteScreen;
