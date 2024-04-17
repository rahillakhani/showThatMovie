import { NavigationProp, RouteProp } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Text } from "react-native";
import { useSelector } from "react-redux";

const MovieDetails: React.FC = ({ route, navigation }: { route: RouteProp<any>, navigation: NavigationProp<any> }) => {
    const movieDetails = useSelector(state => state.movies.filter(el => el["#IMDB_ID"] === route.params.identifier))
    console.log("route", movieDetails, route.params.identifier)
    return (
            <SafeAreaView>
                <Text>
                    Open details
                    {movieDetails[0]["#IMDB_ID"]}
                </Text>
            </SafeAreaView>);
};

export default MovieDetails;
