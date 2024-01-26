import { useEffect, useState } from "react";
import newsApi from "../api/newApi";

export default useNews = () => {
  const [featuredNews, setFeaturedNews] = useState({});
  const [breakingNews, setBreakingNews] = useState([]);
  const [politicalNews, setPoliticalNews] = useState([]);
  const [techNews, setTechNews] = useState([]);
  const [entertainmentNews, setEntertainmentNews] = useState([]);
  const qyt = 5;
  const filterFeatured = (data) => {
    const filterdata = data
      .filter((item) => item.featured === "on")
      .reverse()[0];

    return filterdata;
  };

  const filterByCategory = (data, category) => {
    const result = data
      .filter((item) => item.category === category)
      .reverse()
      .splice(0, qyt);

    if (result.length) {
      result.push({ type: "viewMore", category: category, id: category });
    }

    return result;
  };

  const filterMultipleNews = async () => {
    const allNews = await newsApi.getAll();
    setFeaturedNews(filterFeatured(allNews));
    setBreakingNews(filterByCategory(allNews, "breaking-news"));
    setPoliticalNews(filterByCategory(allNews, "political"));
    setEntertainmentNews(filterByCategory(allNews, "entertainment"));
    setTechNews(filterByCategory(allNews, "tech"));
  };

  useEffect(() => {
    filterMultipleNews();
  }, []);
  return [
    featuredNews,
    politicalNews,
    entertainmentNews,
    techNews,
    breakingNews,
  ];
};
