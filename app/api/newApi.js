import client from "./client";

const getAll = async () => {
  try {
    const response = await client.get("/news");
    if (response.data.success) {
      return response.data.news;
    }
  } catch (error) {
    return [];
  }
  console.log("Error when geting all news");
};
const getByCategory = async (category, qty) => {
  const endpoint = qty ? `news/${category}/${qty}` : `news/${category}`;
  try {
    const response = await client.get(endpoint);

    if (response.data.success) {
      return response.data.news;
    }
  } catch (error) {
    res.json({
      success: false,
      message: "Something went wrong, server error!",
    });
    console.log("Error while getting news by category!", error.message);
  }
};

export default{
    getAll,
    getByCategory
}