import { View, Text, StatusBar } from "react-native";
import React, { useState } from "react";
import SearchBar from "../common/SearchBar";
import Screen from "../common/Screen";
import FeaturedNews from "../screens/FeaturedNews";
import BreakingNews from "../screens/BreakingNews";
import TechNews from "../screens/TechNews";
import PoliticalNews from "../screens/PoliticalNews";
import EntertainmentNews from "../screens/EntertainmentNews";
import useNews from "../../hooks/useNews";
import ActivityIndicator from "../common/ActivityIndicator";
const Home = () => {
  const[isSearchFocused,setSearchFocused] =useState();
  const [
    featuredNews,
    politicalNews,
    entertainmentNews,
    techNews,
    breakingNews,
    loading,
  ] = useNews();
  return (
    <>
        <ActivityIndicator visible={loading} />
      <StatusBar style="auto" />
      <Screen  isSearchFocused={isSearchFocused}>
        <SearchBar setSearchFocused={setSearchFocused} />
        <FeaturedNews item={featuredNews} />
        <BreakingNews data={breakingNews} />
        <PoliticalNews data={politicalNews} />
        <TechNews data={techNews} />
        <EntertainmentNews data={entertainmentNews} />
      </Screen>
    </>
  );
};

export default Home;
