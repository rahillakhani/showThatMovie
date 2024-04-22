import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import GenreBatchSlider from "../../components/GenreBatchSlider.tsx";

export default function ListItem({ item }) {
    const navigation = useNavigation();
    if (!item) return <></>;
    return (
        <Pressable onPress={() => navigation.navigate("MovieDetails", { identifier: item["imdbID"] })}>
            <View style={styles.container}>
                <Image
                    resizeMode='cover'
                    source={{
                        uri: item["Poster"]
                            ? item["Poster"]
                            : "https://static.vecteezy.com/system/resources/previews/004/141/669/large_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg",
                    }}
                    style={styles.moviePoster}
                />
                <View style={styles.content}>
                    <Text style={styles.movieTitle}>{ item["Title"]} - {item["Year"]}</Text>
                    <View style={styles.ratingContainer}>
                        <Image resizeMode='cover' source={{ uri: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png" }} style={styles.ratingIcon} />
                        {/*<Text style={styles.ratingText}>rank {item["#RANK"]}</Text>*/}
                    </View>
                    {/*<FlatList horizontal={true} data={genres} style={styles.genresContainer} renderItem={({ item, index }) => <GenreBadge key={index} genre={item} />} />*/}
                    {/*<GenreBatchSlider />*/}
                    {/*<View style={styles.durationContainer}>*/}
                    {/*    <Image resizeMode='cover' source={{ uri: "https://cdn-icons-png.flaticon.com/512/3239/3239945.png" }} style={styles.durationIcon} />*/}
                    {/*    <Text style={styles.durationText}>00h 00m</Text>*/}
                    {/*</View>*/}
                </View>
                <View>
                    <Image style={styles.ratingIcon} source={{ uri: "https://cdn-icons-png.flaticon.com/512/25/25283.png" }} />
                </View>
            </View>
        </Pressable>
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
        borderWidth: 1,
        borderColor: "#ffffff",
        borderRadius: 10,
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
