import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const SwipeItem = ({ item }: { item: unknown }) => {
    console.log("item", item);
    const test = {
        "#ACTORS": "Abdul khadus Chouhan, Abdul Khadus",
        "#AKA": "Blockbuster rockstar (2022) ",
        "#IMDB_ID": "tt26441003",
        "#IMDB_IV": "https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt26441003&rhash=77ed0696a538f4",
        "#IMDB_URL": "https://imdb.com/title/tt26441003",
        "#IMG_POSTER": "https://m.media-amazon.com/images/M/MV5BYTg2YzY0ODMtZWJjNy00ZTE3LWFmN2ItZmIxZjUwNTdlM2E0XkEyXkFqcGdeQXVyMTU5OTczNzM2._V1_.jpg",
        "#RANK": 2436061,
        "#TITLE": "Blockbuster rockstar",
        "#YEAR": 2022,
        "photo_height": 2880,
        "photo_width": 1920,
    };
    return (
            <View style={styles.movieTile}>
                <Image
                        source={{
                            uri: item["#IMG_POSTER"] || "https://cdn.builder.io/api/v1/image/assets/TEMP/93384f6add86a17298b671a8a035f738c59cb7bcccb8b57380bfb991178cb65b?",
                        }}
                        style={styles.movieImage}
                />
                <View style={styles.movieTitle}>
                    <Text>
                        {item["#TITLE"]}
                    </Text>
                    <Text>
                        {item["#YEAR"]}
                    </Text>
                </View>
                <View style={styles.rating}>
                    <Image
                            source={{
                                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/aeb5c4260f6e89994928670ad995a2c4150d5b8accaeb15ab3344f169f07af73",
                            }}
                            style={styles.ratingImage}
                    />
                    <Text style={styles.ratingText}>9.1/10 IMDb</Text>
                </View>
            </View>
    );
};

export default SwipeItem;

const styles = StyleSheet.create({
    movieTile: {
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        paddingVertical: 5,
    },
    movieImage: { position: "relative", width: "100%", aspectRatio: "1.56" },
    movieTitle: {
        color: "#000",
        letterSpacing: 0.28,
        marginTop: 12,
        width: "100%",
        fontWeight: "700",
        fontSize: 14,
        fontFamily: "Mulish, sans-serif",
    },
    rating: {
        flexDirection: "row",
        alignItems: "center",
    },
    ratingImage: {
        width: 20,
        height: 20,
    },
    ratingText: {
        fontFamily: "Mulish, sans-serif",
        gap: 4,
        fontSize: 12,
        color: "#9C9C9C",
        fontWeight: "400",
        letterSpacing: 0.24,
    },
});

