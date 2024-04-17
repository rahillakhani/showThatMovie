import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Button, Dimensions, Image, StyleSheet, Text, View } from "react-native";
import GenreBatchSlider from "../../components/GenreBatchSlider.tsx";

const SwipeItem = ({ item }: { item: unknown }) => {
    const navigation = useNavigation();
    return (
        <View key={item["#IMDB_ID"]} style={styles.movieTile}>
            <Image
                source={{
                    uri: item["#IMG_POSTER"] || "https://cdn.builder.io/api/v1/image/assets/TEMP/93384f6add86a17298b671a8a035f738c59cb7bcccb8b57380bfb991178cb65b?",
                }}
                style={styles.movieImage}
            />
            <View style={styles.movieTitle}>
                <Text>{item["#TITLE"]}</Text>
                <Text>{item["#YEAR"]}</Text>
                <GenreBatchSlider customStyle={{ maxHeight: 40 }} />

                <View style={styles.rating}>
                    <Image
                        source={{
                            uri: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
                        }}
                        style={styles.ratingImage}
                    />
                    <Text style={styles.ratingText}>9.1/10 IMDb {item["#RANK"]}</Text>
                </View>
                <View style={styles.buttonStyle}>
                    <Button title={"View Details"} onPress={() => navigation.navigate("MovieDetails", { identifier: item["#IMDB_ID"] })} />
                </View>
            </View>
        </View>
    );
};

export default SwipeItem;

const styles = StyleSheet.create({
    movieTile: {
        display: "flex",
        flexDirection: "column",
        // alignItems: "stretch",
        paddingVertical: 5,
    },
    movieImage: { aspectRatio: "1.56" },
    movieTitle: {
        color: "#000",
        letterSpacing: 0.28,
        marginTop: 12,
        width: "100%",
        height: Dimensions.get("window").height / 2,
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
    buttonStyle: {
        margin: 20,
    },
});
