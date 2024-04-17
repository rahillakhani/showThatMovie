// actions.ts

// Action types
// export const ADD_ITEM = "ADD_ITEM";
export const ADD_MOVIES = "ADD_MOVIES";

// // Action creators
// export interface AddItemAction {
//     type: typeof ADD_ITEM | typeof ADD_MOVIES;
//     payload: string;
// }
//
// export const addItem = (item: string): AddItemAction => ({
//     type: ADD_ITEM,
//     payload: item
// });

// Define a type for the object keys
type ObjectKey =
    | "#ACTORS"
    | "#AKA"
    | "#IMDB_ID"
    | "#IMDB_IV"
    | "#IMDB_URL"
    | "#IMG_POSTER"
    | "#RANK"
    | "#TITLE"
    | "#YEAR"
    | "photo_height"
    | "photo_width";

// Define an interface for the object
interface Movie {
    "#ACTORS": string;
    "#AKA": string;
    "#IMDB_ID": string;
    "#IMDB_IV": string;
    "#IMDB_URL": string;
    "#IMG_POSTER": string;
    "#RANK": number;
    "#TITLE": string;
    "#YEAR": number;
    photo_height: number;
    photo_width: number;
}

// Define a type for the function argument
type MovieArray = Movie[];

export interface AddListAction {
    type: typeof ADD_MOVIES;
    payload: MovieArray;
}

export const addList = (list: MovieArray): AddListAction => ({
    type: ADD_MOVIES,
    payload: list
});
