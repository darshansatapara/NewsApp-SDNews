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
import HorizotalList from "../lists/HorizontalList";
import Close from "./Close";
import { useNavigation } from "@react-navigation/native";

const NewsDetails = ({ route }) => {
  const navigation=useNavigation();
  const [news, setNews] = useState();
  const [relatedNews, setRelatedNews] = useState();

  const { id: postId, category: postCategory } = route.params.item;
  const fetchPost = async (id) => {
    const result = await newApi.getSingle(id);

    setNews(result);
  };

  const fatchRelatedNews = async (category) => {
    const result = await newApi.getByCategory(postCategory, 7);

    setRelatedNews(result.filter((item) => item.id !== postId));
  };
  useEffect(() => {
    fetchPost(postId);
    fatchRelatedNews(postId);
  }, []);
  return (
    <>
      <ScrollView style={styles.container}>
        <View>
          <Image style={styles.Image} source={{ uri: news?.thumbnail }} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{news?.title}</Text>
          <Text style={styles.content}>{news?.content}</Text>
        </View>
        <View style={styles.relatedPostContainer}>
          <HorizotalList data={relatedNews} title="Related Post" />
        </View>
        <View style={styles.Close}>
          <Close onPress={()=>navigation.popToTop()} />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
   
  },
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
  relatedPostContainer:{
    paddingLeft: 10,
  }
});

export default NewsDetails;
