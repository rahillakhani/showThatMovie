import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { MovieDetails, MovieList } from "../pages";

const Stack = createStackNavigator();

const NavigationBody = () => {

    return (
            <NavigationContainer linking={{ prefixes: ["stm://"] }}>
                <Stack.Navigator detachInactiveScreens={true} screenOptions={{animationEnabled: true, freezeOnBlur: true}} initialRouteName={"MovieList"}>
                    <Stack.Screen name={"MovieList"} options={{ headerShown: false }} component={MovieList} />
                    <Stack.Screen name={"MovieDetails"} options={{ headerShown: false }}
                                  component={MovieDetails} />
                </Stack.Navigator>
            </NavigationContainer>
    );
};

export default NavigationBody;
