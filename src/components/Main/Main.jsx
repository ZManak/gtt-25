import { Route, Routes } from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import Article from './Article/Article';

export default function Main() {
    return (
        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<About />} path="/sobre-el-vih" />
            <Route element={<Article />} path="/articulo" />
        </Routes>
    )
}