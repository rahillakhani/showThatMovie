import React, { useEffect } from 'react';
import { Button, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from "@react-navigation/native";
import { QueryClient } from "@tanstack/react-query";
import { clearError, setMovieTitle, setMovieYear } from '../../reduxStore';
import { fetchMovies } from "../../reduxStore/movieService.ts";

const SearchByTitleForm = () => {
    const navigation = useNavigation();
    const queryClient = new QueryClient();
    const dispatch = useDispatch();
    const title = useSelector(state => state.movies.title);
    const year = useSelector(state => state.movies.year);
    const loading = useSelector(state => state.movies.loading);
    const error = useSelector(state => state.movies.error);
    const movieList = useSelector(state => state.movies.moviesList);

    const handleReset = () => {
        dispatch(setMovieYear(''));
        dispatch(setMovieTitle(''));
    };

    const handleYearChange = (yearInput) => {
        dispatch(setMovieYear(yearInput || ""));
    };

    const handleTitleChange = (titleInput) => {
        dispatch(setMovieTitle(titleInput || ""));
    };

    const handleSearch = () => {
        dispatch(fetchMovies({ title, year }));
        // Invalidate cache to trigger refetch
        () => queryClient.invalidateQueries("movies/fetchMovies");
    };

    useEffect(() => {
        if (movieList && movieList.length > 0) {
            navigation.navigate("MovieList");
        }
    }, [movieList]);

    if (loading) return <Text>Loading...</Text>;

    return (
            <View style={styles.container}>
                <Text style={styles.title}>ShowMeThatMovie</Text>
                {error && <Text>Error... {error}</Text>}
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
    title: { fontSize: 20, textAlign: "center", marginVertical: 20 },
    container: { padding: 10, flex: 1, justifyContent: "center" },
    inputContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
    input: { flex: 1, lineHeight: 18, borderWidth: 1, borderColor: 'gray', borderRadius: 5, marginHorizontal: 5, padding: 5 },
    buttonContainer: { flexDirection: 'row', marginTop: 10, justifyContent: "center" },
    button: { padding: 10, borderRadius: 5, marginRight: 10, flex: 1, marginHorizontal: 10 },
    buttonText: { color: 'white', textAlign: "center" },
});

export default SearchByTitleForm;
