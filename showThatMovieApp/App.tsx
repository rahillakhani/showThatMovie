import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import NavigationBody from "./src/NavigationBody";
import store from "./src/reduxStore/store.ts";

const App = () => {
    return (
            <Provider store={store}>
                <QueryClientProvider client={new QueryClient({})}>
                <GestureHandlerRootView style={{ flex: 1 }}>
                    <NavigationBody />
                </GestureHandlerRootView>
                </QueryClientProvider>
            </Provider>

    );
};
export default App;
