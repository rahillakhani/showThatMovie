import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies} from "apifetch";

export const DataConsumer = () => {
    console.log("process.env.RESCT_APP_BASE_UR",process.env);
    console.log("process.env.RESCT_APP_BASE_UR",process.env.REACT_APP_BASE_URL);
    const dispatch = useDispatch();
    const movieList = useSelector((state) => state.movies.moviesList);
    const title = useSelector((state) => state.movies.title);
    const year = useSelector((state) => state.movies.year);
    const [searchInput, setSearchInput] = useState(title);
    useEffect(() => {
        dispatch(fetchMovies({title, year}));
    }, []);

    return <>
        <input type={"text"} value={title} onChange={(el) => {
            setSearchInput(el.taget.value || "")
        }}/>
        <ul>
            {movieList && movieList.map(el => {
                console.log("el", el)
                return (<li key={el?.Title}>
                    <img src={el?.Poster} alt={el?.Title} />
                    <h3>{el?.Title} {el?.Year}</h3>
                </li>)
            })}

        </ul>
    </>;
};
