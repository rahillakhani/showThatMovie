import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BottomNavigation = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.bottomNavigation}>
            <TouchableOpacity onPress={() => navigation.navigate("MovieList")} style={styles.button}>
                <Text>Screen Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("MovieList2")} style={styles.button}>
                <Text>Screen 2</Text>
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
        backgroundColor: "#eee",
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
