import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DataConsumer } from "./dataConsumer";

function App() {
  return (
    <div className="App">
        <QueryClientProvider client={new QueryClient({})}>
            <DataConsumer />
        </QueryClientProvider>

    </div>
  );
}

export default App;
