import { View, Text } from "react-native";
import React from "react";
import HorizotalList from "../lists/HorizontalList";

const BreakingNews = ({ data }) => {
  return <HorizotalList title={"Breaking News"} data={data} />;
};

export default BreakingNews;
