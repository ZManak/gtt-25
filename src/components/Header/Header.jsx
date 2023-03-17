import React from "react";
import logo from '../../assets/logo.svg';
import search from '../../assets/search.svg';
import favorite from '../../assets/favorite.svg';
const Header = () => {
  return (
    <header className="w-screen h-36 absolute flex items-center h-16">
      <img
        className="w-34 h-16 ml-40"
        src={logo}
        alt="Logo 25 aniversario GTT"
      />

      <nav className="flex flex-row items-start gap-5 w-8/12 ml-20 mt-3">
        <a
          href="/"
          className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium mx-3"
        >
          Sobre el VIH
        </a>

        <a
          href="/"
          className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium mx-3"
        >
          Te ayudamos
        </a>

        <a
          href="/"
          className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium mx-3"
        >
          Comunidad
        </a>

        <a
          href="/"
          className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium mx-3"
        >
          Actualidad
        </a>
        <a
          href="/"
          className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium mx-3"
        >
          Conócenos
        </a>
        <a
          href="/"

        >
          <img
            className="py-2 "
            src={search}
            alt="Lupa de búsqueda"
          />
        </a>
        <a
          href="/"
          className="w-32 h-12 bg-yellow flex flex-row justify-center items-center pt-2 pb-5 pl-2 pr-6 gap-2.5 rounded-lg mx-3"
        >
          <img
            className="w-5 h-5 mt-2.5 ml-3"
            src={favorite}
            alt="Corazón"
          />
          <span className="text-white w-13 h-5 font-medium text-sm leading-5 mt-2.5">DONAR</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
