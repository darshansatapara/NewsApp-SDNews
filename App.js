import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "./app/components/common/SearchBar";
import Screen from "./app/components/common/Screen";
import FeaturedNews from "./app/components/screens/FeaturedNews";
import SmallCard from "./app/components/common/SmallCard";
import HorizontalList from "./app/components/lists/HorizontalList";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Screen>
        <SearchBar />
        <FeaturedNews/>
      </Screen>
    </>
  );
}
