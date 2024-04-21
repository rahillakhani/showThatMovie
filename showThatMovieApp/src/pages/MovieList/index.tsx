import {RouteProp} from "@react-navigation/native";
import React, {memo, useEffect} from "react";
import {ActivityIndicator, FlatList, SafeAreaView, Text, View} from "react-native";
import Swiper from "react-native-swiper";
import {useSelector} from "react-redux";
import BottomNavigation from "../../components/BottomNavigation.tsx";
import {fetchData} from "../../service";
import ListItem from "./listItem.tsx";
import SearchBar from "./SearchBar.tsx";
import SwipeItem from "./swipeItem.tsx";

const MovieList: React.FC = memo(({route}: { route: RouteProp<any> }) => {
    const {variant} = route.params;

    const movies = useSelector((state) => state.movies.moviesList);

    return (
            <View style={{backgroundcolor: "#efefef", flex: 1}}>
                <SafeAreaView style={{flex: 1}}>
                    <SearchBar />

                    {variant == 1 && <FlatList style={{flex: 1.8}} data={movies?.slice(0, 10) || []}
                                               renderItem={({item}) => <ListItem item={item}/>}/>}

                    {/*// TODO show top rated in seperate list as a carousel - */}
                    {variant == 2 && (
                            <Swiper loadMinimal={true} style={{alignItems: "center", justifyContent: "center"}}>
                                {movies.map((item, index) => {
                                    return <SwipeItem key={index} item={item}/>;
                                })}
                            </Swiper>
                    )}
                </SafeAreaView>
                {/*// TODO Bottom nav */}
                <BottomNavigation variant={variant}/>
            </View>
    );
    return <></>;
});
MovieList.displayName = "MovieList";
export default MovieList;
