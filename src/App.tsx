import React from "react";
import { Route, Routes } from "react-router-dom";
import TestKeyboardPage from "./pages/TestKeyboardPage";
import "./styles/index.css";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<TestKeyboardPage />} />
        </Routes>
    );
};

export default App;
