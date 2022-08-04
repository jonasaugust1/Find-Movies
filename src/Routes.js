import { Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home";
import { TrendingSeries } from "./pages/TrendingSeries";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/series' element={<TrendingSeries />}/>
        </Routes>
    )
}