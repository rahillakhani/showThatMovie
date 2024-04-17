import React from "react";
import { FlatList, StyleSheet, Text, View, ViewStyle } from "react-native";

interface GenreProps {
    genre: string;
}

// Data is not there on backend - hence static
const genres = ["HORROR", "MYSTERY", "THRILLER"];

const GenreBadge: React.FC<GenreProps> = ({ genre }) => (
        <View style={styles.genreBadge}>
            <Text style={styles.genreText}>{genre}</Text>
        </View>
);


export default function GenreBatchSlider({ list = genres, customStyle }: { list?: string[], customStyle: ViewStyle }) {
    return <FlatList horizontal={true} data={list} style={[styles.genresContainer, customStyle]}
                     renderItem={({ item, index }) => <GenreBadge key={index} genre={item} />} />;
}

const styles = StyleSheet.create({
    genresContainer: {
        marginBottom: 8,
        width: "90%",
        padding: 4,
    },
    genreBadge: {
        paddingHorizontal: 6,
        borderRadius: 10,
        backgroundColor: "#DBE3FF",
        marginRight: 5,
    },
    genreText: {
        paddingVertical: 4,

        fontSize: 13,
        color: "#88A4E8",
    },
});
