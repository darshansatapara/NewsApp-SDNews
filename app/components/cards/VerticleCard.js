import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import FlatCard from "./FlatCard";
import ViewMore from "./ViewMore";
import { useNavigation } from "@react-navigation/native";
import newApi from "../../api/newApi";

const VerticleCard = ({ item }) => {
  const navigation = useNavigation();
  const handleViewMore = async (category) => {
    const result = await newApi.getByCategory(category);
    navigation.navigate("NewsList", result);
  };

  if (item.type === "viewMore") {
    return (
      <ViewMore
        onPress={() => handleViewMore(item.category)}
        style={styles.viewMore}
      />
    );
  }
  return (
    <FlatCard
      item={item}
      onPress={() => navigation.navigate("NewsDetails", { item })}
    />
  );
};

const styles = StyleSheet.create({
  viewMore: {
    width: "100%",
    height: 50,
  },
});

export default VerticleCard;
