import Home from "./Home";
import HomeGuard from "./HomeGuard";

export default function App() {
    return (
        <HomeGuard>
            <Home />
        </HomeGuard>
    );
}
