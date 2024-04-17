// store.ts
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IMovie {
    id: string;
    title: string;
    // Add other movie properties here
}

interface IMoviesState {
    movies: IMovie[];
}

const initialState: IMoviesState = {
    movies: [],
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMoviesToList(state, action: PayloadAction<IMovie[]>) {
            state.movies = action.payload;
        },
    },
});

export const { addMoviesToList } = moviesSlice.actions;

export default configureStore({
    reducer: moviesSlice.reducer,
});
