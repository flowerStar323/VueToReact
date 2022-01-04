import { Routes, Route } from "react-router-dom";
import Home from "./components/Index/Home";
import Import from "./pages/import";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/import" element={< Import />} />
        </Routes>
    );
};

export default AppRouter;
