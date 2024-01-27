import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";
import BlockCard from "../cards/BlockCard";
import ViewMore from "../cards/ViewMore";
const { width } = Dimensions.get("window");
const SmallCard = ({item}) => {
  if (item.type==='viewMore') {
    return <ViewMore style={styles.viewMore}/>
  }
  return (
    <View style={styles.container}>
      <BlockCard item={item} imageStyle={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 2,
    marginRight: 15,
    height: 200,
  },
  image: {
    height: 100,
  },
  viewMore:{
    width:width/2,
    height:200,
  }
});

export default SmallCard;
