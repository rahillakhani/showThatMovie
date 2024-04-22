import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { MovieDetails, MovieList } from "../pages";

const Stack = createStackNavigator();

const NavigationBody = () => {
    return (
        <NavigationContainer linking={{ prefixes: ["stm://"] }}>
            <Stack.Navigator detachInactiveScreens={true} screenOptions={{ animationEnabled: true, freezeOnBlur: true, detachPreviousScreen: true }} initialRouteName={"MovieList"}>
                <Stack.Screen name={"MovieList"} options={{ headerShown: false }} component={MovieList} initialParams={{ variant: 1 }} />
                <Stack.Screen name={"MovieList2"} options={{ headerShown: false }} component={MovieList} initialParams={{ variant: 2 }} />
                <Stack.Screen name={"MovieDetails"} options={{ headerShown: true, animationEnabled: true }} component={MovieDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationBody;
