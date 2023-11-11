import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apiConf from "../conf/ApiConf";

const initialState = {
    article:[],
    loader:true,
    filterdArticle : [],
    filteredLoader: true,
}

export const getAllNews = createAsyncThunk("getNews", async (query) => {
    const {data} = await axios.get(`${apiConf.API_BASE_URL}/${apiConf.API_ENDPOINT.everything}?q=${query}&apiKey=${apiConf.API_KEY}`)
    // console.log(data);
    return data
})


export const getFilteredNews = createAsyncThunk("getFiltered", async ( {country="in",category="general", language="en"}) => {
    const response = await axios.get(`${apiConf.API_BASE_URL}/${apiConf.API_ENDPOINT.topHeadlines}?country=${country}&category=${category}&language=${language}&apiKey=${apiConf.API_KEY}`)
    console.log(response);
    return response?.data
})

const articleSlice = createSlice({
    name:"article",
    initialState,
    extraReducers: (builder) =>  {
        builder.addCase(getAllNews.pending, (state) => {
            state.loader = true
        })

        builder.addCase(getAllNews.fulfilled, (state, action) => {
            state.article = action.payload
        })

        builder.addCase(getAllNews.rejected, (state) => {
            state.loader = false
        })



        //getFilteredNews

        builder.addCase(getFilteredNews.pending, (state) => {
            state.filteredLoader = true
        })

        builder.addCase(getFilteredNews.fulfilled, (state, action) => {
            state.filterdArticle = action.payload
        })

        builder.addCase(getFilteredNews.rejected, (state) => {
            state.filteredLoader = false
        })
    }
})

export default articleSlice.reducer