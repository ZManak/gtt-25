import { Route, Routes } from "react-router-dom";
import Home from './Home/Home';


export default function Main() {
    return (
        <main>
            <Routes>
                <Route element={<Home />} path="/" />
            </Routes>
        </main>
    )
}