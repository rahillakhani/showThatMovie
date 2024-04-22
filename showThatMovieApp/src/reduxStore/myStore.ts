import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./index.tsx"
import movies from "./index";
// export const movieStore = configureStore({
//     reducer: {
//         movieStore: movies
//     },
// })

export default configureStore({
    reducer: {
        movies: moviesSlice.reducer
    }
});
