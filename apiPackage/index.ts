
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk(
    "movies/fetchMovies",
    async (searchQuery: { title: string, year: string }, { rejectWithValue }) => {
        try {
            const response = await axios.get(process.env.REACT_APP_BASE_URL, {
                params: { apikey: process.env.REACT_APP_OmdbApiToken, r: "json", s: searchQuery.title, y: searchQuery.year }
            });
            return response.data;
        } catch (error) {
            console.log("error", error);
            return rejectWithValue(error.response.data);
        }
    }
);

export const fetchMoviesDetails = createAsyncThunk(
    "movies/fetchMovieDetail",
    async (searchQuery: string, { rejectWithValue }) => {
        try {
            const response = await axios.get(process.env.REACT_APP_BASE_URL, {
                params: { apikey: process.env.REACT_APP_OmdbApiToken, i: searchQuery }
            });
            return response.data;
        } catch (error) {
            console.log("error", error);
            return rejectWithValue(error.response.data);
        }
    }
);
