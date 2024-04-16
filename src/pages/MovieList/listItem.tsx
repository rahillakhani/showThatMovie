import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface GenreProps {
    genre: string;
}

const GenreBadge: React.FC<GenreProps> = ({ genre }) => (
        <View style={styles.genreBadge}>
            <Text style={styles.genreText}>{genre}</Text>
        </View>
);

const genres = ["HORROR", "MYSTERY", "THRILLER"];

export default function ListItem({ item }) {
    console.log(" item[\"#IMG_POSTER\"] ", item["#IMG_POSTER"] ? item["#IMG_POSTER"] : "https://static.vecteezy.com/system/resources/previews/004/141/669/large_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg");
    return (
            <View style={styles.container}>
                <Image
                        resizeMode="cover"
                        source={{ uri: item["#IMG_POSTER"] ? item["#IMG_POSTER"] : "https://static.vecteezy.com/system/resources/previews/004/141/669/large_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg" }}
                        style={styles.moviePoster}
                />
                <View style={styles.content}>
                    <Text style={styles.movieTitle}>{item["#TITLE"]}</Text>
                    <Text style={styles.movieTitle}>{item["#YEAR"]}</Text>
                    <View style={styles.ratingContainer}>
                        <Image
                                resizeMode="cover"
                                source={{ uri: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png" }}
                                style={styles.ratingIcon}
                        />
                        <Text style={styles.ratingText}>{item["#RANK"]}</Text>
                    </View>
                    <View style={styles.genresContainer}>
                        {genres.map((genre) => (
                                <GenreBadge key={genre} genre={genre} />
                        ))}
                    </View>
                    <View style={styles.durationContainer}>
                        <Image
                                resizeMode="cover"
                                source={{ uri: "https://cdn-icons-png.flaticon.com/512/3239/3239945.png" }}
                                style={styles.durationIcon}
                        />
                        <Text style={styles.durationText}>1h 47m</Text>
                    </View>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    moviePoster: {
        width: 100,
        height: 150,
        marginRight: 20,
    },
    content: {
        flex: 1,
    },
    movieTitle: {
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 8,
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    ratingIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    ratingText: {
        fontSize: 16,
    },
    genresContainer: {
        flexDirection: "row",
        marginBottom: 8,
    },
    genreBadge: {
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 10,
        backgroundColor: "#DBE3FF",
        marginRight: 5,
    },
    genreText: {
        fontSize: 14,
        color: "#88A4E8",
    },
    durationContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    durationIcon: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    durationText: {
        fontSize: 16,
    },
});
