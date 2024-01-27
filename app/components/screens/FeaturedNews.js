import { Text, View } from "react-native";
import React, { Component } from "react";
import BlockCard from "../cards/BlockCard";
import { useNavigation } from "@react-navigation/native";
import NewsDetails from "../common/NewsDetails";

const FeaturedNews = ({ item }) => {
  const navigation = useNavigation();
  return (
    <BlockCard
      onPress={() => navigation.navigate("NewsDetails",{item:item})}
      item={item}
      style={{ marginVertical: 15 }}
    />
  );
};

export default FeaturedNews;
