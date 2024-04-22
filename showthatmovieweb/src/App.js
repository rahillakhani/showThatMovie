import "./App.css";
import { DataConsumer } from "./dataConsumer";
import { Provider } from "react-redux";
import store from "./reduxStore/store";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <DataConsumer/>
            </Provider>

        </div>
    );
}

export default App;
