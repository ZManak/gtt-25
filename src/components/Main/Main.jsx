import { Route, Routes } from "react-router-dom";
import Home from './Home/Home';


export default function Main() {
    return (
        <Routes>
            <Route element={<Home />} path="/" />
        </Routes>
    )
}