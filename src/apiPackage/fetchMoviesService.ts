import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "./index.ts";
import { addMoviesToList } from "../reduxStore";

const fetchRandom = (input) => {
    const dispatch = useDispatch();
    const dataResolved = fetchData({
        url: "https://search.imdbot.workers.dev",
        params: { q: JSON.stringify(input) }
    });
    useEffect(() => {
        if (dataResolved.data) {
            dispatch(addMoviesToList(dataResolved.data.data.description));
        }
    }, [dataResolved.data]);

    return dataResolved;
};
export const fetchMovieList = (input) => {
    return fetchRandom(input);
};


