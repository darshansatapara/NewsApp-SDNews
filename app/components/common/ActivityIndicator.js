import React from "react";
import { View, StyleSheet ,Image} from "react-native";


const ActivityIndicator = ({ visible }) => {
  if (!visible) return null;

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/loading.gif")}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
});

export default ActivityIndicator;
