import React, { useEffect, useState } from "react";
import { Image, Pressable, SafeAreaView, Text, TextInput } from "react-native";

const searchIcon = "https://img.icons8.com/?size=256&id=132&format=png";
const SearchBar: React.FC = () => {
    const [inputVal, setInputVal] = useState("top in 2024");
    const CallAPI = () => {
        // console.log("inputVal", inputVal);
    }

    useEffect(() => {
        const callInterval = setTimeout(() => {
            CallAPI();
        }, 300);

        return () => clearTimeout(callInterval);
    }, [inputVal]);
    return (
            <SafeAreaView style={{flexDirection: "row" }}>
                <TextInput
                        value={inputVal}
                        hitSlop={{ bottom: 10, top: 10, left: 10, right: 10 }}
                        onChangeText={(value) => {
                            setInputVal(value);
                        }}
                        style={{ padding: 10, borderWidth: 1, borderColor: "#cccccc", borderRadius: 5, flex: 1 }}
                />
                <Pressable onPress={CallAPI}>
                    <Image source={{ uri: searchIcon }} style={{ width: 30, height: 30 }} />
                </Pressable>

            </SafeAreaView>
    );
};

export default SearchBar;
