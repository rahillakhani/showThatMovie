import React from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import data from "../movieList.json";
import ListItem from "./listItem.tsx";
import SearchBar from "./SearchBar.tsx";

const MovieList: React.FC = () => {
    console.log("data", data.description[0]);
    return (
            <View style={{ backgroundColor: "#efefef", flex: 1 }}>
                <SafeAreaView style={{ borderWidth: 3, flex: 1 }}>
                    <SearchBar />
                    <FlatList style={{ flex: 1.8 }} data={data.description.slice(0, 10)} renderItem={ListItem} />


                    {/*// TODO show top rated in seperate list as a carousel
                    <Swiper autoplay={true} style={{ alignItems: "center", justifyContent: "center" }}>*/}
                    {/*    {data?.description?.map((item) => {*/}
                    {/*        return <SwipeItem item={item}/>;*/}
                    {/*    })}*/}

                    {/*</Swiper>*/}
                </SafeAreaView>
            </View>);
};


export default MovieList;
