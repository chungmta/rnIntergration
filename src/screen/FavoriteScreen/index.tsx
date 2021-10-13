import React from "react";
import { View, Text } from "react-native";

interface Props {
  message: string;
}
const FavoriteScreen = (props: Props) => {
  console.log("----", props);

  return (
    <View>
      <Text>HELLO Native</Text>
    </View>
  );
};

export default FavoriteScreen;
