import { Text, View } from "react-native";
import React, { Component } from "react";
import BlockCard from "../cards/BlockCard";

const FeaturedNews = ({item}) => {
  return <BlockCard item={item} style={{ marginVertical: 15 }} />;
};

export default FeaturedNews;
