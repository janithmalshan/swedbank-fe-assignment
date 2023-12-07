import EverydayBankingPage from "./pages/EverydayBankingPage";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="everyday-banking" element={<EverydayBankingPage />} />
                    <Route path="*" element={<HomePage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
