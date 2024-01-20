import { Text, View } from "react-native";
import React, { Component } from "react";

const Title = ({ children, numberOfLines = 2, size = 18 }) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={{ fontWeight: "bold", fontSize: size }}
    >
      {children}
    </Text>
  );
};

export default Title;
