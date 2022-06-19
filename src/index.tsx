import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import Login from "./Login";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<App />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
);
