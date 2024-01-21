import { View, Text } from "react-native";
import React from "react";
import HorizotalList from "../lists/HorizontalList";

const TechNews = ({data}) => {
  return <HorizotalList title={"Tech News"} data={data} />;
};

export default TechNews;
