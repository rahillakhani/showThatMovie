import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk(
    "movies/fetchMovies",
    async (searchQuery, { rejectWithValue }) => {
        console.log("searchQuery", searchQuery);
        try {
            const response = await axios.get(process.env.RESCT_APP_BASE_URL, {
                params: { apikey: "a2561a37", s: searchQuery.title, y: searchQuery.year }
            });
            console.log("response.data", response);
            return response.data;
        } catch (error) {
            console.log("error", error);
            return rejectWithValue(error.response.data);
        }
    }
);
