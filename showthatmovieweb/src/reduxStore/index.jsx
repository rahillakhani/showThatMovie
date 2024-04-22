import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchMovies, fetchMoviesDetails} from "./movieService";

const initialState = {
    moviesList: [],
    moviesDetail: {},
    variant: 1,
    year: "",
    title: "top rated",
    loading: false,
    error: null
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMoviesToList(state, action) {
            state.moviesList = action.payload;
        },

        setMovieYear: function (state, action) {
            state.year = action.payload;
        },

        setMovieTitle: function (state, action) {
            state.title = action.payload;
        },

        clearError: function (state, action) {
            state.error = undefined;
        },

    },
    extraReducers: (builder) => {
        builder
                .addCase(fetchMovies.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(fetchMovies.fulfilled, (state, action) => {
                    state.loading = false;
                    if (!action.payload.Search) {
                        state.error = action.payload.Error || "moviet found";
                        return;
                    }
                    state.moviesList = action.payload.Search;
                })
                .addCase(fetchMovies.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
                })
                .addCase(fetchMoviesDetails.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(fetchMoviesDetails.fulfilled, (state, action) => {
                    state.loading = false;
                    if (action.payload.Error) {
                        state.error = action.payload.Error || "moviet found";
                        return;
                    }
                    state.moviesDetail = action.payload;
                })
                .addCase(fetchMoviesDetails.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
                });
    },
});

export const {clearError, addMoviesToList, setMovieYear, setMovieTitle} = moviesSlice.actions;

export default moviesSlice;
