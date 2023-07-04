import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
    useNavigate,
} from "react-router-dom";
import Home from "./components/Home";
import Reports from "./components/Reports";
import Login from "./Login";
import { auth } from "./shared/firebase";

export default function App() {
    const [user, loading] = useAuthState(auth);
    return loading ? (
        <></>
    ) : (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                {user ? (
                    <>
                        <Route path="/home" element={<Home user={user} />} />
                        <Route
                            path="/reports"
                            element={<Reports user={user} />}
                        />
                        <Route
                            path="*"
                            element={<Navigate to="/home" replace />}
                        />
                    </>
                ) : (
                    <Route
                        path="*"
                        element={<Navigate to="/login" replace />}
                    />
                )}
            </Routes>
        </BrowserRouter>
    );
}
