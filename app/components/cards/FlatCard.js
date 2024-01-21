import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";

const FlatCard = ({ item }) => {
  const { thumbnail, title, desc } = item;
  return (
    <View style={styles.container}>
      <Image source={{ uri: thumbnail }} style={[styles.image]} />
      <View style={styles.contentContainer}>
        <Title>{title}</Title>
        <SubTitle>{desc}</SubTitle>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 10,
    height: 80,
  },
  image: {
    flex: 0.35,
    height: "100%",
  },

  contentContainer: {
    flex: 0.65,
    paddingHorizontal: 5,
  },
});

export default FlatCard;
