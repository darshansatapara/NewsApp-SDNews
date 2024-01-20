import { ScrollView ,StyleSheet,StatusBar} from "react-native";
import React from "react";

const Screen = ({ children }) => {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 15,
    backgroundColor: "#f7f3d4",
    flex: 1,
  },
});
export default Screen;
