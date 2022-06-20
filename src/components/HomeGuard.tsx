import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../shared/firebase";
import Home from "./Home";

export default function HomeGuard() {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            return;
        }
        if (!user) navigate("/login");
    }, [user, loading, navigate]);

    return <>{user && <Home user={user} />}</>;
}
