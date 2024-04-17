// store.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IMovie {
    id: string;
    title: string;
    // Add other movie properties here
}

interface IMoviesState {
    movies: IMovie[];
}

const initialState: IMoviesState[] = {
    moviesList: []
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMoviesToList(state, action: PayloadAction<IMoviesState[]>) {
            state.moviesList = action.payload;
        },
    },
});

export const { addMoviesToList } = moviesSlice.actions;

export default moviesSlice
