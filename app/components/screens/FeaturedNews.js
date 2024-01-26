import { Text, View } from "react-native";
import React, { Component } from "react";
import BlockCard from "../cards/BlockCard";

const FeaturedNews = ({item}) => {
  return <BlockCard  thumbnail="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wE9b?ver=5797" item={item} style={{ marginVertical: 15 }} />;
};

export default FeaturedNews;
