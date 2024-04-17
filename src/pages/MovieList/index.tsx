import { RouteProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import { useDispatch, useSelector } from "react-redux";
import { addMoviesToList } from "../.././reduxStore";
import { fetchData } from "../../apiPackage";
import BottomNavigation from "../../components/BottomNavigation.tsx";
import ListItem from "./listItem.tsx";
import SearchBar from "./SearchBar.tsx";
import SwipeItem from "./swipeItem.tsx";

const MovieList: React.FC = ({ route }: { route: RouteProp<any> }) => {
    console.log("variant", route.params.variant);
    const { variant } = route.params;
    const dispatch = useDispatch();
    const movies = useSelector((state) => {
        return state.movies.moviesList;
    });

    const [searchInput, setSearchInput] = useState("James bond");

    const { refetch, data, isFetching, isError, error } = fetchData({
        url: "https://search.imdbot.workers.dev",
        params: { q: JSON.stringify(searchInput) },
    });
    useEffect(() => {
        if (data) {
            dispatch(addMoviesToList(data.data.description));
        }
    }, [data]);

    useEffect(() => {
        const callInterval = setTimeout(() => {
            if (!searchInput || searchInput === "") {
                dispatch(addMoviesToList([]));
            }
            (async () => {
                console.log("awaited on refetch");
                try {
                    await refetch();
                } catch (err) {
                    console.log("err in refetch", err);
                }
                console.log("completed refetch ");
            })();
        }, 300);

        return () => clearTimeout(callInterval);
    }, [searchInput]);

    if (isFetching)
        return (
                <View>
                    <ActivityIndicator />
                    <Text>Loading</Text>
                </View>
        );
    if (isError)
        return (
                <View>
                    <Text>Error, {error && error.message}</Text>
                </View>
        );

    return (
        <View style={{ backgroundColor: "#efefef", flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <SearchBar update={setSearchInput} value={searchInput} />
                {variant == 1 &&
                        <FlatList style={{ flex: 1.8 }} data={movies?.slice(0, 10) || []}
                                  renderItem={({ item }) => <ListItem item={item} />} />

                }

                {/*// TODO show top rated in seperate list as a carousel - */}
                {variant == 2 && (
                        <Swiper loadMinimal={true}
                                style={{ alignItems: "center", justifyContent: "center" }}>
                            {movies.map((item, index) => {
                                return <SwipeItem key={index} item={item} />;
                            })}
                        </Swiper>
                )}
            </SafeAreaView>
            {/*// TODO Bottom nav */}
            <BottomNavigation />
        </View>
    );
    return <></>;
};

export default MovieList;
