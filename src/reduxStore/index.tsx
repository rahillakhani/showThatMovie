import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
}

const initialState: IMoviesState = {
    moviesList: [],
    movieSearch: "top rated",
    variant: 1,
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMoviesToList(state, action: PayloadAction<IMoviesState>) {
            state.moviesList = action.payload;
        },

        setMovieSearch(state, action: PayloadAction<IMoviesState>) {
            console.log("action.payload",action.payload);
            state.movieSearch = action.payload;
        },
        setScreenVariant(state, action: PayloadAction<IMoviesState>) {
            if(action.payload > 2 || action.payload < 1 ) return;
            state.variant = action.payload;
        },
    },
});

export const { addMoviesToList, setMovieSearch } = moviesSlice.actions;

export default moviesSlice;
