import React from "react";
import { View, Text } from "react-native";

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
        borderWidth: 1,
        borderColor: "red",
        flexDirection: "column",
        // justifyContent: "space-between",
      }}>
      <Text>HELLO Native</Text>
      <View
        style={{
          // alignSelf: "flex-end",
          backgroundColor: "red",
          height: 20,
          width: "100%",
        }}
      />
    </View>
  );
};

export default FavoriteScreen;
