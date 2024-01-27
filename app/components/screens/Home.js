import { View, Text,StatusBar } from "react-native";
import React from "react";
import SearchBar from "../common/SearchBar";
import Screen from "../common/Screen";
import FeaturedNews from "../screens/FeaturedNews";
import BreakingNews from "../screens/BreakingNews";
import TechNews from "../screens/TechNews";
import PoliticalNews from "../screens/PoliticalNews";
import EntertainmentNews from "../screens/EntertainmentNews";
import useNews from "../../hooks/useNews";
const Home = () => {
  const [
    featuredNews,
    politicalNews,
    entertainmentNews,
    techNews,
    breakingNews,
  ] = useNews();
  return (
    <>
      <StatusBar style="auto" />
      <Screen>
        <SearchBar />
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
