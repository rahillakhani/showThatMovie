import {useNavigation} from "@react-navigation/native";
import {QueryClient} from "@tanstack/react-query";
import React, {FC, useEffect} from 'react';
import {Button, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {clearError, setMovieTitle, setMovieYear} from '../../reduxStore';
import {fetchMovies} from "../../reduxStore/movieService.ts";

const SearchByTitleForm: FC = () => {
    const navigation = useNavigation();
    const queryClient = new QueryClient();
    const dispatch = useDispatch();
    const title = useSelector((state) => state.movies.title);
    const year = useSelector((state) => state.movies.year);
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
        () => queryClient.invalidateQueries("movies/fetchMovies");
    }

    useEffect(() => {
        if(movieList && movieList.length > 0){
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
    title: { fontSize: 20, textAlign:"center", marginVertical: 20},
    container: { padding: 10, flex: 1, justifyContent: "center" },
    inputContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
    input: { flex: 1, lineHeight: 18, borderWidth: 1, borderColor: 'gray', borderRadius: 5, marginHorizontal: 5, padding: 5 },
    buttonContainer: { flexDirection: 'row', marginTop: 10, justifyContent: "center" },
    button: { padding: 10, borderRadius: 5, marginRight: 10, flex: 1, marginHorizontal: 10 },
    buttonText: { color: 'white', textAlign: "center" },
});

export default SearchByTitleForm;

// const dd = {
//     "config": {
//         "adapter": ["xhr", "http"],
//         "data": undefined,
//         "env": {"Blob": [Function Blob], "FormData": [Function FormData]},
//         "headers": [Object],
//         "maxBodyLength": -1,
//         "maxContentLength": -1,
//         "method": "get",
//         "params": {"apikey": "a2561a37", "s": "", "y": ""},
//         "timeout": 0,
//         "transformRequest": [[Function transformRequest]],
//         "transformResponse": [[Function transformResponse]],
//         "transitional": {"clarifyTimeoutError": false, "forcedJSONParsing": true, "silentJSONParsing": true},
//         "url": "https://www.omdbapi.com/",
//         "validateStatus": [Function validateStatus],
//         "xsrfCookieName": "XSRF-TOKEN",
//         "xsrfHeaderName": "X-XSRF-TOKEN"
//     },
//     "data": {"Error": "Incorrect IMDb ID.", "Response": "False"},
//     "headers": {
//         "access-control-allow-origin": "*",
//         "cache-control": "public, max-age=86400",
//         "cf-cache-status": "MISS",
//         "cf-ray": "8780facff89b33d2-DEL",
//         "content-encoding": "gzip",
//         "content-type": "application/json; charset=utf-8",
//         "date": "Sun, 21 Apr 2024 22:58:37 GMT",
//         "expires": "Sun, 21 Apr 2024 23:58:37 GMT",
//         "last-modified": "Sun, 21 Apr 2024 22:58:37 GMT",
//         "server": "cloudflare",
//         "vary": "*, Accept-Encoding",
//         "x-aspnet-version": "4.0.30319",
//         "x-powered-by": "ASP.NET"
//     },
//     "request": {
//         "DONE": 4,
//         "HEADERS_RECEIVED": 2,
//         "LOADING": 3,
//         "OPENED": 1,
//         "UNSENT": 0,
//         "_aborted": false,
//         "_cachedResponse": undefined,
//         "_hasError": false,
//         "_headers": {"accept": "application/json, text/plain, */*"},
//         "_incrementalEvents": false,
//         "_lowerCaseResponseHeaders": {
//             "access-control-allow-origin": "*",
//             "cache-control": "public, max-age=86400",
//             "cf-cache-status": "MISS",
//             "cf-ray": "8780facff89b33d2-DEL",
//             "content-encoding": "gzip",
//             "content-type": "application/json; charset=utf-8",
//             "date": "Sun, 21 Apr 2024 22:58:37 GMT",
//             "expires": "Sun, 21 Apr 2024 23:58:37 GMT",
//             "last-modified": "Sun, 21 Apr 2024 22:58:37 GMT",
//             "server": "cloudflare",
//             "vary": "*, Accept-Encoding",
//             "x-aspnet-version": "4.0.30319",
//             "x-powered-by": "ASP.NET"
//         },
//         "_method": "GET",
//         "_perfKey": "network_XMLHttpRequest_https://www.omdbapi.com/?apikey=a2561a37&s=&y=",
//         "_performanceLogger": {
//             "_closed": false,
//             "_extras": [Object],
//             "_isGlobalLogger": true,
//             "_pointExtras": [Object],
//             "_points": [Object],
//             "_timespans": [Object]
//         },
//         "_requestId": null,
//         "_response": "{\"Response\":\"False\",\"Error\":\"Incorrect IMDb ID.\"}",
//         "_responseType": "",
//         "_sent": true,
//         "_subscriptions": [],
//         "_timedOut": false,
//         "_trackingName": "unknown",
//         "_url": "https://www.omdbapi.com/?apikey=a2561a37&s=&y=",
//         "readyState": 4,
//         "responseHeaders": {
//             "Access-Control-Allow-Origin": "*",
//             "Cache-Control": "public, max-age=86400",
//             "Content-Encoding": "gzip",
//             "Content-Type": "application/json; charset=utf-8",
//             "Date": "Sun, 21 Apr 2024 22:58:37 GMT",
//             "Expires": "Sun, 21 Apr 2024 23:58:37 GMT",
//             "Last-Modified": "Sun, 21 Apr 2024 22:58:37 GMT",
//             "Server": "cloudflare",
//             "Vary": "*, Accept-Encoding",
//             "cf-cache-status": "MISS",
//             "cf-ray": "8780facff89b33d2-DEL",
//             "x-aspnet-version": "4.0.30319",
//             "x-powered-by": "ASP.NET"
//         },
//         "responseURL": "https://www.omdbapi.com/?apikey=a2561a37&s=&y=",
//         "status": 200,
//         "timeout": 0,
//         "upload": {},
//         "withCredentials": true
//     },
//     "status": 200,
//     "statusText": undefined
// }
