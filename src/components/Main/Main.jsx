import { Route, Routes } from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import Article from './Article/Article';
import VIH from './About/Category/VIH/VIH';

export default function Main() {
    return (
        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<About />} path="/sobre-el-vih" />
            <Route element={<Article />} path="/articulo" />
            <Route path="/como-funciona-el-vih" element={<VIH />} />
        </Routes>
    )
}