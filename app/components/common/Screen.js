import { ScrollView ,StyleSheet,StatusBar} from "react-native";
import React from "react";

const Screen = ({ children,isSearchFocused }) => {
  const keyboardShouldPersistTaps=isSearchFocused ?'always' :'never';
  return <ScrollView keyboardShouldPersistTaps={keyboardShouldPersistTaps} scrollEnabled={!isSearchFocused} style={styles.container}>{children}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    paddingHorizontal: 5,
    backgroundColor: "#f7f3d4",
    flex: 1,
  },
});
export default Screen;
