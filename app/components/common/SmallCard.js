import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import BlockCard from "../cards/BlockCard";
const { width } = Dimensions.get("window");
const SmallCard = () => {
  return (
    <View style={styles.container}>
      <BlockCard imageStyle={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2,
    marginRight: 15,
    height: 200,
  },
  image: {
    height: 100,
  },
});

export default SmallCard;
