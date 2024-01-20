import {  View, StyleSheet,TextInput } from "react-native";
import React from "react";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchInput} placeholder="Search here.." />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "red",
    borderRadius: 8,
    justifyContent: "center",
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingLeft: 8,
    fontSize: 16,
  },
});
export default SearchBar;
