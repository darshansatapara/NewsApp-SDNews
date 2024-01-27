import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import NewsDetails from "../common/NewsDetails";
import NewsList from "../lists/NewsList";

const stack=createStackNavigator();

const AppNavigator = () => {
  return (
<stack.Navigator>
    <stack.Screen name="Home" component={Home}   />
    <stack.Screen name="NewsDetails" component={NewsDetails}   />
    <stack.Screen name="NewsList" component={NewsList}   />
</stack.Navigator>
  )
};
const styles = StyleSheet.create({
  container: {},
});
export default AppNavigator;
