import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./index";

export default configureStore({
    reducer: {
        movies: moviesSlice.reducer
    }
});
