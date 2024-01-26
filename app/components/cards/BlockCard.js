import { Text, View, Image, StyleSheet } from "react-native";
import React from "react";
import Title from "../common/Title";
import SubTitle from "../common/SubTitle";

const BlockCard = ({ imageStyle, item }) => {
  const {thumbnail, title, desc } = item;
  
  return (
    <>
      <View style={styles.container}>
        <Image source={{ uri: thumbnail }} style={[styles.image, imageStyle]} />

        <View style={styles.contentContainer}>
          <Title>{title}</Title>
          <SubTitle>{desc}</SubTitle>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
  contentContainer: {
    padding: 5,
  },
});
export default BlockCard;
