import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apiConf from "../conf/ApiConf";

const initialState = {
  //everything
  article: [],
  loader: true,

  //top-headlines endpoint / categoryData
  filterdArticle: [],
  filteredLoader: true,
  sportsArticles: [],
  scienceArticles: [],
  entertainmentArticles: [],
  businessArticles: [],
  technologyArticles: [],
  generalArticles: [],
  healthArticles: [],
};

export const getAllNews = createAsyncThunk(
  "getNews",
  async ({ query = "all", page,language="en" }) => {
    try {
      const { data } = await axios.get(
        `${apiConf.API_BASE_URL}/${apiConf.API_ENDPOINT.everything}?q=${query}&page=${page}&language=${language}&apiKey=${apiConf.API_KEY}`
      );
      return data;
    } catch (error) {
      console.error("Error in fetching EveryData:", error);
      throw error;
    }
  }
);

export const getFilteredNews = createAsyncThunk(
  "getFiltered",
  async ({
    query = "",
    country = "in",
    category = "general",
    language = "en",
  }) => {
    try {
      const response = await axios.get(
        `${apiConf.API_BASE_URL}/${apiConf.API_ENDPOINT.topHeadlines}?q=${query}&country=${country}&category=${category}&language=${language}&apiKey=${apiConf.API_KEY}`
      );
      return { data: response?.data, category: category };
    } catch (error) {
      console.error("Error in fetching filterdData", error.response);
      throw error;
    }
  }
);

//everythng
const articleSlice = createSlice({
  name: "article",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllNews.pending, (state) => {
      state.loader = true;
    });

    builder.addCase(getAllNews.fulfilled, (state, action) => {
      state.article = action.payload;
    });

    builder.addCase(getAllNews.rejected, (state, action) => {
      state.loader = false;
      console.error("Error fetching every data", action.error);
    });

    //getFilteredNews or categoryNews

    builder.addCase(getFilteredNews.pending, (state) => {
      state.filteredLoader = true;
    });

    builder.addCase(getFilteredNews.fulfilled, (state, action) => {
      if (action.payload.category === "sports") {
        state.sportsArticles = action.payload.data;
      }

      if (action.payload.category === "science") {
        state.scienceArticles = action.payload.data;
      }

      if (action.payload.category === "entertainment") {
        state.entertainmentArticles = action.payload.data;
      }

      if (action.payload.category === "technology") {
        state.technologyArticles = action.payload.data;
      }

      if (action.payload.category === "health") {
        state.healthArticles = action.payload.data;
      }

      if (action.payload.category === "general") {
        state.generalArticles = action.payload.data;
      }

      if (action.payload.category === "business") {
        state.businessArticles = action.payload.data;
      }

      state.filteredLoader = false;
    });

    builder.addCase(getFilteredNews.rejected, (state, action) => {
      (state.sportsArticles = []),
        (state.scienceArticles = []),
        (state.entertainmentArticles = []),
        (state.technologyArticles = []),
        (state.healthArticles = []),
        (state.generalArticles = []),
        (state.businessArticles = []),
        (state.filteredLoader = false);
      console.error("Error fetching filtered news:", action.error);
    });
  },
});

export default articleSlice.reducer;
