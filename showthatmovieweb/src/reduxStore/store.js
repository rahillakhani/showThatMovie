import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./index.jsx"

export default configureStore({
    reducer: {
        movies: moviesSlice.reducer
    }
});
