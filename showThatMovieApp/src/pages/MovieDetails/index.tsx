import {RouteProp} from "@react-navigation/native";
import {QueryClient} from "@tanstack/react-query";
import React, {useEffect} from "react";
import {Image, ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import GenreBatchSlider from "../../components/GenreBatchSlider.tsx";
import {fetchMoviesDetails} from "../../reduxStore/movieService.ts";

const MovieDetails: React.FC = ({ route }: { route: RouteProp<any> }) => {

    const movieData = useSelector((state) => state.movies.moviesDetail);
    const loading = useSelector((state) => state.movies.loading);
    const error = useSelector((state) => state.movies.error);
    const dispatch = useDispatch();

    const queryClient = new QueryClient();
    useEffect(() => {
        console.log("route.params.identifier", route.params.identifier);
        dispatch(fetchMoviesDetails(route.params.identifier));
        // Invalidate cache to trigger refetch
        () => queryClient.invalidateQueries("movies/fetchMovies");
    }, []);

    if (loading) return <Text>Loading</Text>;
    if (error) return <Text>Error, {error}</Text>;
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ImageBackground resizeMode='cover' source={{uri: movieData["Poster"]}} style={styles.backgroundImage}>
                {/*<Image resizeMode='cover' source={{ uri: movieData["IMG_POSTER"] }} style={styles.secondaryImage} />*/}
            </ImageBackground>
            <View style={styles.detailsContainer}>
                <View style={styles.ratingContainer}>
                    <Image resizeMode='cover' source={{ uri: "https://cdn-icons-png.flaticon.com/512/3172/3172476.png" }} style={styles.ratingImage} />
                    <View style={styles.ratingTextContainer}>
                        <Text style={styles.ratingText}>{movieData["Title"]}</Text>
                        <Text style={styles.ratingText}>{movieData["Released"]}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={[styles.descriptionTitle, styles.descriptionText]}>Rated {movieData["Rated"]}</Text>
                    <Text style={[styles.descriptionTitle, styles.descriptionText]}>Year {movieData["Year"]}</Text>
                    <Text style={[styles.descriptionTitle, styles.descriptionText]}>Rank {movieData["imdbRating"]}</Text>
                </View>
                {movieData["Genre"] &&
                        <GenreBatchSlider list={movieData["Genre"].split(", ")}/>
                }
                <Text style={styles.descriptionTitle}>Description</Text>

                <Text style={styles.descriptionText}>
                    {movieData["Plot"]}
                </Text>
                {movieData["Actors"] &&
                        <>
                            <Text style={styles.descriptionTitle}>Actors</Text>
                            <GenreBatchSlider list={movieData["Actors"].split(", ")}/>
                        </>
                }
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
    },
    backgroundImage: {
        overflow: "hidden",
        position: "relative",
        display: "flex",
        aspectRatio: 1.22,
        width: "100%",
        flexDirection: "column",
        alignItems: "stretch",
        paddingTop: 44,
        paddingBottom: 80,
    },
    secondaryImage: {
        position: "relative",
        marginBottom: 84,
        width: "100%",
        aspectRatio: 6.25,
    },
    detailsContainer: {
        display: "flex",
        marginTop: 13,
        width: "100%",
        flexDirection: "column",
        alignItems: "stretch",
        paddingHorizontal: 24,
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
    ratingImage: {
        width: 30,
        height: 30,
    },
    ratingTextContainer: {
        marginLeft: 8,
    },
    ratingText: {
        fontSize: 18,
        color: "#9C9C9C",
    },
    genreListContainer: {
        flexDirection: "row",
        marginTop: 16,
        gap: 8,
    },
    genreContainer: {
        borderRadius: 100,
        backgroundColor: "#DBE3FF",
        paddingVertical: 4,
        paddingHorizontal: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    genreText: {
        color: "#88A4E8",
        fontSize: 12,
        fontWeight: "700",
    },
    descriptionTitle: {
        color: "#110E47",
        fontSize: 16,
        fontWeight: "900",
        marginTop: 27,
    },
    descriptionText: {
        color: "#6c6c6c",
        fontSize: 12,
        lineHeight: 22,
        marginTop: 15,
    },
    castList: {
        marginTop: 27,
    },
    castMemberContainer: {
        marginRight: 16,
        // alignItems: "center",
    },
    castImage: {
        width: 72,
        height: 72,
        borderRadius: 36,
    },
    castName: {
        marginTop: 8,
        fontSize: 12,
        color: "#110E47",
    },
});

export default MovieDetails;
