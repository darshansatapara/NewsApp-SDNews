import { StatusBar } from "expo-status-bar";
import SearchBar from "./app/components/common/SearchBar";
import Screen from "./app/components/common/Screen";
import FeaturedNews from "./app/components/screens/FeaturedNews";
import BreakingNews from "./app/components/screens/BreakingNews";
import TechNews from "./app/components/screens/TechNews";
import PoliticalNews from "./app/components/screens/PoliticalNews";
import EntertainmentNews from "./app/components/screens/EntertainmentNews";
import useNews from "./app/hooks/useNews";

export default function App() {
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
}
