import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import NavigationBody from "./src/NavigationBody";
import { GlobalStore } from "./src/reduxStore/store";

const App = () => {
    return (
            <Provider store={GlobalStore.getStore()}>
                <GestureHandlerRootView style={{ flex: 1 }}>
                    <NavigationBody />
                </GestureHandlerRootView>
            </Provider>

    );
};
export default App;
