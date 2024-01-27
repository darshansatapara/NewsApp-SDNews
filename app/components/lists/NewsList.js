import React from "react";
import { View, StyleSheet ,StatusBar,Text} from "react-native";

const NewsList = () => {
  return (
    <>
    <View style={styles.headerContent}>
      <Text style={styles.categoryTitle}>Category</Text>
    </View>
    <View>

    </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContent: {
    height: 100,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4e4d4d",
    // marginTop: StatusBar.currentHeight,
  },
  categoryTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'white',
  },
});

export default NewsList;
