import { View, Text } from "react-native";
import React from "react";
import HorizotalList from "../lists/HorizontalList";
import VerticleList from "../lists/VerticleList";


const TechNews = ({data}) => {
  return <VerticleList title={"Tech News"} data={data} />;
};

export default TechNews;
