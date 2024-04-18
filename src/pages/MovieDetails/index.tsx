import { RouteProp } from "@react-navigation/native";
import React from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import GenreBatchSlider from "../../components/GenreBatchSlider.tsx";

const MovieDetails: React.FC = ({ route }: { route: RouteProp<any> }) => {
    const movieData = useSelector((state) => state.movies.moviesList.filter((el) => el["#IMDB_ID"] === route.params.identifier)[0]);

    if (!movieData) return <Text>Loading</Text>;
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ImageBackground resizeMode='cover' source={{ uri: movieData["#IMG_POSTER"] }} style={styles.backgroundImage}>
                {/*<Image resizeMode='cover' source={{ uri: movieData["#IMG_POSTER"] }} style={styles.secondaryImage} />*/}
            </ImageBackground>
            <View style={styles.detailsContainer}>
                <View style={styles.ratingContainer}>
                    <Image resizeMode='cover' source={{ uri: "https://cdn-icons-png.flaticon.com/512/3172/3172476.png" }} style={styles.ratingImage} />
                    <View style={styles.ratingTextContainer}>
                        <Text style={styles.ratingText}>{movieData["#TITLE"]}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={[styles.descriptionTitle, styles.descriptionText]}>Year {movieData["#YEAR"]}</Text>
                    <Text style={[styles.descriptionTitle, styles.descriptionText]}>Rank {movieData["#RANK"]}</Text>
                </View>
                <GenreBatchSlider />
                <Text style={styles.descriptionTitle}>Description</Text>

                <Text style={styles.descriptionText}>
                    Also known as {movieData["#AKA"]}
                    <Text>More Description will come here</Text>
                </Text>

                <Text style={styles.descriptionTitle}>Actors</Text>
                <GenreBatchSlider list={movieData["#ACTORS"].split(", ")} />
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
