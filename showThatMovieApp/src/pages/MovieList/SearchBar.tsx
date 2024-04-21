import React, {Dispatch} from "react";
import {Image, Pressable, SafeAreaView, TextInput} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {setMovieTitle} from "../../reduxStore";
import {fetchMovies} from "../../reduxStore/movieService.ts";

const searchIcon = "https://img.icons8.com/?size=256&id=132&format=png";
type ISearchProps = { update: Dispatch<string>; value: string; search: () => void };
const SearchBar: React.FC<ISearchProps> = ({ update, value, search }: ISearchProps) => {
    const dispatch = useDispatch();

    const title = useSelector((state) => state.movies.title);
    const year = useSelector((state) => state.movies.year);
    const inputHandle = (input: string) => {
        dispatch(setMovieTitle(input || ""));
    };

    const handleSearch = (() => {
        console.log("search")
        dispatch(fetchMovies({title, year}));
    })
    return (
        <SafeAreaView style={{ flexDirection: "row" }}>
            <TextInput
                    value={title}
                hitSlop={{ bottom: 10, top: 10, left: 10, right: 10 }}
                onChangeText={inputHandle}
                style={{ padding: 10, borderWidth: 1, borderColor: "#cccccc", borderRadius: 5, flex: 1 }}
            />
            <Pressable
                onPress={() => {
                    handleSearch();
                }}
            >
                <Image source={{ uri: searchIcon }} style={{ width: 30, height: 30 }} />
            </Pressable>
        </SafeAreaView>
    );
};

export default SearchBar;
