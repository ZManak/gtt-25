import React from "react";
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';
import favorite from '../../assets/favorite.svg';

const Footer = () => {
  return (
    <footer className="w-screen text-white flex h-148 bg-green">
      <section className="w-96 h32 flex flex-col items-start gap-4 ml-32 mt-20">
        <p className="text-2xl">gTt</p>
        <div className="flex flex-row items-start gap-6 mt-6 text-xs">
          <p>
            Desde 1997 ayudamos a la gente con sida Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
          </p>
          <p>
            Desde 1997 ayudamos a la gente con sida Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
          </p>
        </div>
      </section>
      <section className="w-48 h-16 ml-233 mt-20 absolute">
        <p className="font-medium text-base">Nos puedes encontrar en:</p>
        <div className="w-32 flex gap-2.5 mt-3">
          <a
            href="https://www.facebook.com/gtt.vih/"
          >
            <img
              src={facebook}
              alt="Facebook"
            />
          </a>
          <a
            href="https://www.instagram.com/gtt_vih/"
          >
            <img
              src={instagram}
              alt="Instagram"
            />
          </a>
          <a
            href="https://twitter.com/gTtVIH"
          >
            <img
              src={twitter}
              alt="Twitter"
            />
          </a>
        </div>
      </section>
      <section className="ml-233 mt-80 absolute">
        <a
          href="/"
          className="w-44 h-12 bg-yellow flex flex-row justify-center items-center pt-2 pb-5 pl-2 pr-6 gap-2.5 rounded-lg"
        >
          <img
            className="w-5 h-5 mt-2.5 ml-3"
            src={favorite}
            alt="Corazón"
          />
          <span className="text-white w-13 h-5 font-medium text-sm leading-5 mt-2.5">DONAR</span>
        </a>
      </section>
      <section className="absolute ml-32 mt-72 w-96 h-16">
        <p className="font-medium text-base">Suscríbete a nuestra newsletter</p>
        <form action="/" className="mt-6">
          <input type="text" class="w-64 bg-transparent border-b-2 border-white text-white opacity-60 focus:outline-none focus:border-blue-500" placeholder="email" />
          <button type="submit" className="bg-yellow2 text-black rounded-2xl w-16 h-6 ml-3 font-normal text-xs">ENVIAR</button>
        </form>
      </section>
      <nav className="absolute w-44 h-36 ml-631px mt-20 flex flex-col items-start gap-2 font-medium text-sm">
        <a
          href="/"
          className=""
        >
          Sobre el VIH
        </a>

        <a
          href="/"
          className=""
        >
          Te ayudamos
        </a>

        <a
          href="/"
          className=""
        >
          Comunidad
        </a>

        <a
          href="/"
          className=""
        >
          Noticias
        </a>
        <a
          href="/"
          className=""
        >
          Conócenos
        </a>
      </nav>
      <p className="absolute text-xs font-normal mt-450px ml-32">© gTt - Grupo de Trabajo sobre Tratamientos del VIH</p>
      <p className="absolute text-xs font-normal mt-475px ml-32 underline">Contacto | Mapa del sitio | Aviso legal | Política de privacidad | Política de cookies | Licencia CreativeCommons | Accesibilidad</p>
    </footer>
  )
};

export default Footer;
