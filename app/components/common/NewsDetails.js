import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import newApi from "../../api/newApi";
const { width, height } = Dimensions.get("window");

const NewsDetails = ({ route }) => {
  const [news, setNews] = useState();
  const { id: postId, category: postCategory } = route.params.item;
  const fetchPost = async (id) => {
      const result = await newApi.getSingle(id);
      // console.log(result);
      setNews(result);
    };
    console.log(news)
    const { title, content, thumbnail } = news;
  useEffect(() => {
    fetchPost(postId);
  }, []);
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.Image} source={{ uri: thumbnail }} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  Image: {
    width: "auto",
    height: 300,
  },
  contentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: "#4e4d4d",
  },
});

export default NewsDetails;
