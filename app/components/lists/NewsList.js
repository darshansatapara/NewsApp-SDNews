import React from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";
import VerticleList from "./VerticleList";
import { ScrollView } from "react-native-gesture-handler";

const NewsList = ({ route }) => {
  const data = route.params;
  const header=data[0].category
  return (
    <>
      <ScrollView>
        <View style={styles.headerContent}>
          <Text style={styles.categoryTitle}>{header}</Text>
        </View>
        <View style={styles.ListOfNews}>
          <VerticleList data={data} />
        </View>
      </ScrollView>
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
  ListOfNews: {
    paddingHorizontal: 7,
  },
  categoryTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "white",
  },
});

export default NewsList;
