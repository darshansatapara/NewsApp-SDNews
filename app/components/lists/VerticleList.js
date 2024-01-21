import { View, Text, StyleSheet } from "react-native";
import React from "react";
import VerticleCard from "../cards/VerticleCard";
import Title from "../common/Title";

const VerticleList = ({ title, data }) => {
  return (
    <View>
      {title && <Title>{title} </Title>}
      <View style={styles.container}>
        {data.map((item) => (
          <VerticleCard item={item} key={item.id} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
});

export default VerticleList;
