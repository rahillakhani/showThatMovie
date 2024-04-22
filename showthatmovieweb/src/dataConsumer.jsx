import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies} from "apifetch";
export const DataConsumer = () => {
    console.log("process.env.RESCT_APP_BASE_UR",process.env);
    console.log("process.env.RESCT_APP_BASE_UR",process.env.REACT_APP_BASE_URL);
    const [searchInput, setSearchInput] = useState();
    const dispatch = useDispatch();

    const title = useSelector((state) => state.movies.title);
    const year = useSelector((state) => state.movies.year);
    useEffect(() => {
        dispatch(fetchMovies({title, year}));
    }, []);

    return <>
        <input type={"text"} onChange={(el) => {setSearchInput(el.taget.value || "")}}/>

    </>;
};
