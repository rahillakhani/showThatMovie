import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./index.tsx"

export default configureStore({
    reducer: {
        movies: moviesSlice.reducer
    }
});
