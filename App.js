import { StatusBar } from "expo-status-bar";
import SearchBar from "./app/components/common/SearchBar";
import Screen from "./app/components/common/Screen";
import FeaturedNews from "./app/components/screens/FeaturedNews";
import BreakingNews from "./app/components/screens/BreakingNews";
import TechNews from "./app/components/screens/TechNews";
import PoliticalNews from "./app/components/screens/PoliticalNews";
import EntertainmentNews from "./app/components/screens/EntertainmentNews";
export default function App() {
  const breakingnews = data.filter((item) => item.category === "breaking-news");
  const tech = data.filter((item) => item.category === "tech");
  const politic = data.filter((item) => item.category === "political");
  const entertainment = data.filter((item) => item.category === "entertainment");

  return (
    <>
      <StatusBar style="auto" />
      <Screen>
        <SearchBar />
        <FeaturedNews
          item={{
            id: "1",
            title: "This is the title no one.",
            desc: "Desc is the short form of description and this format is the actual same as our real database.",
            thumbnail: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wB6C?ver=dddf",
            category: "breaking-news",
          }}
        />
        <BreakingNews data={breakingnews} />
        <TechNews data={tech}/>
        <PoliticalNews  data={politic} />
        <EntertainmentNews data={entertainment} />
     
      </Screen>
    </>
  );
}
