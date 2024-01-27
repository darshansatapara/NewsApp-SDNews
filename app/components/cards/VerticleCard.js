import React from "react";
import { View, StyleSheet } from "react-native";
import FlatCard from "./FlatCard";
import ViewMore from "./ViewMore";
const VerticleCard = ({ item }) => {

  if (item.type==='viewMore') {
    return <ViewMore/>
  }
  return <FlatCard item={item} />;
};

const styles = StyleSheet.create({});

export default VerticleCard;
