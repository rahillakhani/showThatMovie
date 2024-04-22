import {ParamListBase, RouteProp} from "@react-navigation/native";
import React, {memo} from "react";
import {FlatList, SafeAreaView, View} from "react-native";
import Swiper from "react-native-swiper";
import {useSelector} from "react-redux";
import BottomNavigation from "../../components/BottomNavigation.tsx";
import ListItem from "./listItem.tsx";
import SearchBar from "./SearchBar.tsx";
import SwipeItem from "./swipeItem.tsx";


type IMovieList = { route: RouteProp<ParamListBase> }

const MovieList: React.FC<IMovieList> = memo(({route}: IMovieList) => {
    const {variant} = route.params;

    const movies = useSelector((state) => state.movies.moviesList);

    return (
            <View style={{backgroundColor: "#efefef", flex: 1}}>
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
