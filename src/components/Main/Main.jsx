import { Route, Routes } from "react-router-dom";
import Home from './Home/Home';
import Chat from './Chat/Chat';
import About from './About/About';
import Article from './Article/Article';
import VIH from './About/Category/VIH/VIH';

export default function Main() {
    return (
        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<About />} path="/sobre-el-vih" />
            <Route element={<VIH />} path="/como-funciona-el-vih" />
            <Route element={<Chat />} path="/chat/:msg" />
            <Route element={<Article />} path="/articulo" />
        </Routes>
    )
}