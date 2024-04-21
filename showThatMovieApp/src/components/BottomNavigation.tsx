import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { setMovieSearch } from "../reduxStore";

const BottomNavigation = ({variant}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    // TODO : screen variant from redux than using initial params.
    // const handleViewChange = (variant) => {
    //     dispatch(setMovieSearch(variant));
    // }

    return (
        <View style={styles.bottomNavigation}>
            <TouchableOpacity onPress={() => navigation.navigate("MovieList")} style={styles.button}>
                <Text style={{fontWeight: variant == 1? 700: 300}}>Screen Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("MovieList2")} style={styles.button}>
                <Text style={{fontWeight: variant == 2? 700: 300}}>Screen Option 2</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    bottomNavigation: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 60,
        backgroundcolor: "#eee",
    },
    button: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
    },
});

export default BottomNavigation;
