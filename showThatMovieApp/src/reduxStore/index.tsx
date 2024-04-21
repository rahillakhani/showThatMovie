import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchMovies} from "./movieService.ts";

export interface IMovie {
    "#TITLE": string;
    "#YEAR": number;
    "#IMDB_ID": string;
    "#RANK": number;
    "#ACTORS": string;
    "#AKA": string;
    "#IMDB_URL": string;
    "#IMDB_IV": string;
    "#IMG_POSTER": string;
    photo_width: number;
    photo_height: number;
};


export interface IMoviesState {
    moviesList: IMovie[];
    movieSearch: string;
    variant: 1 | 2;
    year: { y: string | number };
    title: { t: string };
    loading: boolean;
    error: string | null | undefined;
}

const initialState: IMoviesState = {
    moviesList: [],
    movieSearch: "top rated",
    variant: 1,
    year: {y: ""},
    title: {t: ""},
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
            console.log("action.payload", action.payload);
            state.movieSearch = action.payload;
        },
        setMovieYear: function (state: IMoviesState, action: PayloadAction<string>) {
            state.year = {y: action.payload};
        },

        setMovieTitle: function (state: IMoviesState, action: PayloadAction<string>) {
            state.title = {t: action.payload};
        },

    },
    extraReducers: (builder) => {
        builder
                .addCase(fetchMovies.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(fetchMovies.fulfilled, (state, action) => {
                    console.log("action.payload",action.payload.Search);
                    state.loading = false;
                    state.moviesList = action.payload;
                })
                .addCase(fetchMovies.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.error.message;
                });
    },
});

export const {addMoviesToList, setMovieSearch, setMovieYear, setMovieTitle} = moviesSlice.actions;

export default moviesSlice;
