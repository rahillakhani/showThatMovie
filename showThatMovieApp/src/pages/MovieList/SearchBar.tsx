import React, { Dispatch } from "react";
import { Image, Pressable, SafeAreaView, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { setMovieSearch } from "../../reduxStore";

const searchIcon = "https://img.icons8.com/?size=256&id=132&format=png";
type ISearchProps = { update: Dispatch<string>; value: string; search: () => void };
const SearchBar: React.FC<ISearchProps> = ({ update, value, search }: ISearchProps) => {
    const dispatch = useDispatch();
    const inputHandle = (input) => {
        dispatch(setMovieSearch(input));
    };
    return (
        <SafeAreaView style={{ flexDirection: "row" }}>
            <TextInput
                value={value}
                hitSlop={{ bottom: 10, top: 10, left: 10, right: 10 }}
                onChangeText={inputHandle}
                style={{ padding: 10, borderWidth: 1, borderColor: "#cccccc", borderRadius: 5, flex: 1 }}
            />
            <Pressable
                onPress={() => {
                    search();
                }}
            >
                <Image source={{ uri: searchIcon }} style={{ width: 30, height: 30 }} />
            </Pressable>
        </SafeAreaView>
    );
};

export default SearchBar;
