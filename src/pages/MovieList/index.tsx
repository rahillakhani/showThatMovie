import { NavigationProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addMoviesToList } from "../.././reduxStore";
import { fetchData } from "../../apiPackage";
// import data from "../movieList.json";
import ListItem from "./listItem.tsx";
import SearchBar from "./SearchBar.tsx";

const MovieList: React.FC = ({ navigation }: { navigation: NavigationProp<any> }) => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => {
        return state.movies.moviesList;
    });

    const [searchInput, setSearchInput] = useState("James bond");

    const { refetch, data, isFetching } = fetchData({
        url: "https://search.imdbot.workers.dev",
        params: { q: JSON.stringify(searchInput) },
    });
    useEffect(() => {

        if (data) {
            dispatch(addMoviesToList(data.data.description));
        }
    }, [data]);
    const fetchMovies = () => {
    };


    useEffect(() => {
        const callInterval = setTimeout(() => {
            if(!searchInput || searchInput === "" ) {
                dispatch(addMoviesToList([]));
            }
            refetch();
        }, 300);

        return () => clearTimeout(callInterval);
    }, [searchInput]);

    if (!movies) return <Text>Loading</Text>;

    return (
            <View style={{ backgroundColor: "#efefef", flex: 1 }}>
                <SafeAreaView style={{ borderWidth: 3, flex: 1 }}>
                    <SearchBar update={setSearchInput} value={searchInput} />
                    <FlatList style={{ flex: 1.8 }} data={movies?.slice(0, 10) || []}
                              renderItem={({ item }) => <ListItem item={item} />} />


                    {/*// TODO show top rated in seperate list as a carousel
                        <Swiper autoplay={true} style={{ alignItems: "center", justifyContent: "center" }}>*/}
                    {/*    {data?.description?.map((item) => {*/}
                    {/*        return <SwipeItem item={item}/>;*/}
                    {/*    })}*/}

                    {/*</Swiper>*/}
                </SafeAreaView>
            </View>);
    return <></>;
};


export default MovieList;
