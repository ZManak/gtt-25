import React from 'react';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';
import favorite from '../../assets/favorite.svg';

const Footer = () => {
  return (
    <footer className="w-[1368px] rounded-[32px] text-white flex h-148 bg-green mx-6 mb-10">
      <section className="w-96 h32 flex flex-col items-start gap-4 ml-32 mt-20 absolute">
        <p className="text-2xl font-['Poppins'] font-medium">gTt</p>
        <div className="flex flex-row items-start gap-6 mt-2 text-xs font-['Roboto'] font-normal">
          <p>
            De acuerdo con nuestros objetivos, en gTt elaboramos información
            sobre tratamientos del VIH y el SIDA desde una perspectiva
            comunitaria.
          </p>
          <p>
            También abordamos cualquier otro aspecto social, económico, político
            o cultural relacionado con la situación de las personas con
            infección por VIH y llevamos a cabo acciones de defensa y promoción
            de los derechos humanos.
          </p>
        </div>
      </section>
      <section className="w-[211px] h-16 ml-233 mt-20 absolute">
        <p className="font-medium text-base font-['Poppins']">
          Nos puedes encontrar en:
        </p>
        <div className="w-32 flex gap-2.5 mt-3">
          <a href="https://www.facebook.com/gtt.vih/">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/gtt_vih/">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="https://twitter.com/gTtVIH">
            <img src={twitter} alt="Twitter" />
          </a>
        </div>
      </section>
      <section className="ml-233 mt-[450px] absolute ">
        <a
          href="/"
          className="w-44 h-12 bg-yellow flex flex-row justify-center items-center pt-2 pb-5 pl-2 pr-6 gap-2.5 rounded-lg"
        >
          <img className="w-5 h-5 mt-2.5 ml-3" src={favorite} alt="Corazón" />
          <span className="text-white w-13 h-5 font-bold font-['Poppins'] text-sm leading-5 mt-2.5">
            DONAR
          </span>
        </a>
      </section>
      <section className="absolute ml-32 mt-72 w-96 h-16">
        <p className="font-medium text-base">Suscríbete a nuestra newsletter</p>
        <form action="/" className="mt-6">
          <input
            type="text"
            className="w-64 bg-transparent border-b-2 border-white text-white opacity-60 placeholder:text-white focus:outline-none focus:border-blue-500"
            placeholder="email"
          />
          <button
            type="submit"
            className="bg-yellow text-white rounded-md w-16 h-6 ml-3 font-normal text-xs font-['Poppins']"
          >
            ENVIAR
          </button>
        </form>
      </section>
      <nav className="absolute w-44 h-36 ml-[631px] mt-20 flex flex-col items-start gap-2 font-medium text-sm font-['Roboto']">
        <a href="/sobre-el-vih" className="">
          Sobre el VIH
        </a>

        <a href="/" className="">
          Te ayudamos
        </a>

        <a href="/" className="">
          Comunidad
        </a>

        <a href="/" className="">
          Actualidad
        </a>
        <a href="/" className="">
          Conócenos
        </a>
      </nav>
      <section className="ml-233 mt-[367px] absolute ">
        <a
          href="http://localhost:3000/admin"
          className="w-44 h-12 bg-yellow flex flex-row justify-center items-center pt-2 pb-5 pl-2 pr-6 gap-2.5 rounded-lg"
        >
          <span className="text-white w-13 h-5 font-bold font-['Poppins'] text-sm leading-5 mt-2.5">
            ADMIN
          </span>
        </a>
      </section>
      <p className='aboslute font-["Roboto"] font-normal text-[12px] w-[264px] mt-[159px] ml-233'>
        Sede en Barcelona:
        <br />
        C/ Avinyó, 44 3ª planta;08002 Barcelona (España)
        <br />
        Tels.: +34 93 208 08 45 +34 93 458 26 41
        <br />
        email: contact@gtt-vih.org
      </p>
      <p className='absolute font-["Roboto"] font-normal text-[12px] w-[264px] mt-[255px] ml-233'>
        Sede en Madrid:
        <br />
        c/ Gandía 1, local 9A28007 Madrid (España)
        <br />
        Tel.: +34 683 280 312
        <br />
        email: madrid@gtt-vih.org
      </p>
      <p className="absolute text-xs font-normal mt-[450px] ml-32 font-['Roboto']">
        © gTt - Grupo de Trabajo sobre Tratamientos del VIH
      </p>
      <p className="absolute text-xs font-normal mt-[475px] ml-32 underline font-['Roboto']">
        Contacto | Mapa del sitio | Aviso legal | Política de privacidad |
        Política de cookies | Licencia CreativeCommons | Accesibilidad
      </p>
    </footer>
  );
};

export default Footer;
