import { RouteProp } from "@react-navigation/native";
import React from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import GenreBatchSlider from "../../components/GenreBatchSlider.tsx";

type CastMemberProps = {
    name: string;
    imageUri?: string;
};

const CastMember: React.FC<CastMemberProps> = ({ name = "" }: CastMemberProps) => {
    console.log("name", name);
    return (
            <View style={styles.castMemberContainer}>
                {/*{imageUri &&*/}
                {/*        <Image resizeMode="cover" source={{ uri: imageUri }} style={styles.castImage} />*/}
                {/*}*/}
                <Text>{name}</Text>
            </View>
    );
};

const genres = ["ACTION", "ADVENTURE", "FANTASY"];
const castData = [
    {
        name: "Tom Holland",
        imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/13017bb11325ab718e4a312951f5b58aac9037dc6aa9b04b0dc52b7295edef8f?apiKey=4b11da30d9dd4d14b8f6e36528e32af6&",
    },
    {
        name: "Zendaya",
        imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc88febcafcf3a188312cdbcf9d6c4dffc0753682afeae1e6fdfc3da913b4a01?apiKey=4b11da30d9dd4d14b8f6e36528e32af6&",
    },
    {
        name: "Benedict Cumberbatch",
        imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/a5d93c4417ee94cf8dc2a8cca9dd3999588d5e4c9a82b56293d4d73fba9ed634?apiKey=4b11da30d9dd4d14b8f6e36528e32af6&",
    },
    {
        name: "Jacob Batalon",
        imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/069c7f1213fa4714cd7b478ed4d4c89a1eb48d43ac1a1adfd7c522b74014e0b0?apiKey=4b11da30d9dd4d14b8f6e36528e32af6&",
    },
];
const test = [
    {
        "#ACTORS": "Allari Naresh, Sakshi Chaudhary",
        "#AKA": "James Bond (2015) ",
        "#IMDB_ID": "tt4896340",
        "#IMDB_IV": "https://t.me/iv?url=https%3A%2F%2Fimdb.com%2Ftitle%2Ftt4896340&rhash=77ed0696a538f4",
        "#IMDB_URL": "https://imdb.com/title/tt4896340",
        "#IMG_POSTER": "https://m.media-amazon.com/images/M/MV5BM2IwZDRiOTAtNTUxOC00ZWQxLThlYTYtZTM2NTRmMjEzNmQwXkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_.jpg",
        "#RANK": 66931,
        "#TITLE": "James Bond",
        "#YEAR": 2015,
        photo_height: 953,
        photo_width: 500,
    },
];
const MovieDetails: React.FC = ({ route }: { route: RouteProp<any> }) => {
    const movieData = useSelector((state) => state.movies.moviesList.filter((el) => el["#IMDB_ID"] === route.params.identifier)[0]);

    if (!movieData) return <Text>Loading</Text>;
    console.log("movieData", movieData["#IMG_POSTER"], movieData);
    return (
            <ScrollView contentContainerStyle={styles.container}>
                <ImageBackground resizeMode="cover" source={{ uri: movieData["#IMG_POSTER"] }}
                                 style={styles.backgroundImage}>
                    {/*<Image resizeMode='cover' source={{ uri: movieData["#IMG_POSTER"] }} style={styles.secondaryImage} />*/}
                </ImageBackground>
                <View style={styles.detailsContainer}>
                    <View style={styles.ratingContainer}>
                        <Image
                                resizeMode="cover"
                                source={{ uri: "https://cdn-icons-png.flaticon.com/512/3172/3172476.png" }}
                                style={styles.ratingImage}
                        />
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
    )
            ;
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
