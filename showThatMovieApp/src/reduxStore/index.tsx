import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMovie, IMoviesState} from "./movieDetails.types.ts";
import {fetchMovies, fetchMoviesDetails} from "./movieService.ts";

const initialState: IMoviesState = {
    moviesList: [],
    moviesDetail: {},
    movieSearch: "top rated",
    variant: 1,
    year: "",
    title: "",
    loading: false,
    error: null
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMoviesToList(state, action: PayloadAction<IMovie[]>) {
            state.moviesList = action.payload;
        },

        setMovieSearch(state, action: PayloadAction<string>) {
            state.movieSearch = action.payload;
        },
        setMovieYear: function (state: IMoviesState, action: PayloadAction<string>) {
            state.year = action.payload;
        },

        setMovieTitle: function (state: IMoviesState, action: PayloadAction<string>) {
            state.title = action.payload;
        },

        clearError: function (state: IMoviesState, action: PayloadAction<string>) {
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

export const {clearError, addMoviesToList, setMovieSearch, setMovieYear, setMovieTitle} = moviesSlice.actions;

export default moviesSlice;
