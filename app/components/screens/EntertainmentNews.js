import { View, Text } from "react-native";
import React from "react";
import HorizotalList from "../lists/HorizontalList";

const EntertainmentNews = ({ data }) => {
  return <HorizotalList title={"Entertainment News"} data={data} />;
};

export default EntertainmentNews;
