import {useNavigation} from "@react-navigation/native";
import {QueryClient} from "@tanstack/react-query";
import React, {FC, useEffect, useState} from 'react';
import { Text, TextInput, Pressable, View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setMovieYear,setMovieTitle } from '../../reduxStore';
import {fetchMovies} from "../../reduxStore/movieService.ts";

const SearchByTitleForm: FC = () => {
    const navigation = useNavigation();
    const queryClient =new QueryClient();
    const dispatch = useDispatch();
    const title = useSelector((state) => state.movies.title.t);
    const year = useSelector((state) => state.movies.year.y);
    const loading = useSelector((state) => state.movies.loading);
    const error = useSelector((state) => state.movies.error);
    const movieList = useSelector((state) => state.movies.moviesList);

    const handleReset = () => {
        dispatch(setMovieYear(''));
        dispatch(setMovieTitle(''));
    };

    const handleYearChange = (yearInput: string) => {
            dispatch(setMovieYear(yearInput || ""));
    };

    const handleTitleChange = (titleInput: string) => {
            dispatch(setMovieTitle(titleInput || ""));
    };

    const handleSearch = () => {
        dispatch(fetchMovies({title, year}));
        // Invalidate cache to trigger refetch
        queryClient.invalidateQueries("movies/fetchMovies");
    }

    useEffect(() => {
        if(movieList.length > 0){
            navigation.navigate("MovieList");
        }
    }, [movieList]);
    if(loading) return <Text>Loading...</Text>;
    if(error) return <Text>Error...</Text>;
    return (
            <View style={styles.container}>
                <Text style={styles.title}>ShowMeThatMovie</Text>
                <View style={styles.inputContainer}>
                    <Text>Title:</Text>
                    <TextInput
                            style={styles.input}
                            value={title}
                            onChangeText={handleTitleChange}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text>Year:</Text>
                    <TextInput
                            style={styles.input}
                            value={year}
                            onChangeText={handleYearChange}
                            keyboardType="numeric"
                            maxLength={4}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable
                            style={[styles.button, { backgroundColor: 'blue' }]}
                            onPress={handleSearch}
                    >
                        <Text style={styles.buttonText}>Search</Text>
                    </Pressable>
                    <Pressable
                            style={[styles.button, { backgroundColor: 'gray' }]}
                            onPress={handleReset}
                    >
                        <Text style={styles.buttonText}>Reset</Text>
                    </Pressable>
                </View>
            </View>
    );
};

const styles = StyleSheet.create({
    title: { fontSize: 20, textAlign:"center", marginVertical: 20},
    container: { padding: 10, flex: 1, justifyContent: "center" },
    inputContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
    input: { flex: 1, lineHeight: 18, borderWidth: 1, borderColor: 'gray', borderRadius: 5, marginHorizontal: 5, padding: 5 },
    buttonContainer: { flexDirection: 'row', marginTop: 10, justifyContent: "center" },
    button: { padding: 10, borderRadius: 5, marginRight: 10, flex: 1, marginHorizontal: 10 },
    buttonText: { color: 'white', textAlign: "center" },
});

export default SearchByTitleForm;
