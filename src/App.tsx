import './App.css';
import {QueryClient, QueryClientProvider} from "react-query";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./layouts/DefaultLayout";

function App() {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        <Route path="/*" element={<DefaultLayout/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App
