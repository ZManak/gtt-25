import { useNavigate } from "react-router-dom";
import group1 from '../../../assets/group1.svg';
import send from '../../../assets/send.svg';
import favorite from '../../../assets/favorite.svg';
import destacamos from '../../../assets/destacamos.svg';
import verMas from '../../../assets/verMas.svg';
import covid from '../../../assets/covid.svg';
import frio from '../../../assets/frio.svg';
import viruela from '../../../assets/viruela.svg';
import biktarvy from '../../../assets/biktarvy.svg';
import multimorbilidad from '../../../assets/multimorbilidad.svg';
import peso from '../../../assets/peso.svg';
import semestral from '../../../assets/semestral.svg';
import croi2023 from '../../../assets/croi2023.svg';
import play_arrow from '../../../assets/play_arrow.svg';
import play_circle from '../../../assets/play_circle.svg';
import opinion from '../../../assets/opinion.svg';
import sabes from '../../../assets/sabes.svg';
import miedo from '../../../assets/miedo.svg';
import historia from '../../../assets/historia.svg';
import abbVie from '../../../assets/abbVie.svg';
import msd from '../../../assets/msd.svg';
import gcp from '../../../assets/gcp.svg';
import viiv from '../../../assets/viiv.svg';
import gente from '../../../assets/gente.svg';
import whatsapp from '../../../assets/whatsapp.svg';
import telegram from '../../../assets/telegram.svg';
import facebook2 from '../../../assets/facebook2.svg';
import skype from '../../../assets/skype.svg';
import logo25 from '../../../assets/logo25.svg';
import registrate from '../../../assets/registrate.svg';
import avelain from '../../../assets/avelain.svg';
import arteaga from '../../../assets/arteaga.svg';
import fuster from '../../../assets/fuster.svg';

export default function Home() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Acceder a los datos del formulario utilizando la referencia del elemento del DOM
    const msg = event.target.elements.msg.value;
    navigate(`/chat/${msg}`);
  };

  return (
    <main>
      <section className="w-[1368px] bg-orange3 rounded-[32px] h-[640px] mt-36 ml-20 mb-20">
        <img src={group1} alt="Gente" className="mt-[5.84px] ml-[480px] absolute" />
        <form onSubmit={handleSubmit}>
          <input type="text" name="msg" className="w-[373px] h-[137px] ml-[80px] mt-[430px] shadow-md rounded absolute" />
          <button type="submit" >
            <img src={send} alt="Enviar" className="absolute ml-[420px] mt-[520px]" />
          </button>
        </form>
        <p className='absolute text-[21.36px] text-green font-medium font-["Roboto"] w-[469px] ml-[80px] mt-[163px] leading-[30.36px]'>Sabemos que recibir un diagnóstico de VIH puede ser abrumador y puede haber muchas preguntas que surjan. Pero no estás solx. Estamos aquí para ayudarte y brindarte información veraz y útil.</p>
        <p className='absolute text-[21.36px] text-green font-bold w-[270px] ml-[80px] mt-[355px]'>Pregunta lo que quieras:</p>
        <p className='absolute text-[62.69px] font-["Poppins"] text-orange font-bold ml-[80px] mt-[72px] leading-[64px]'>Chat gTt</p>
      </section>
      <section className='w-[1128px] h-[365px] my-20 ml-[206px] bg-[#FCDCA4] rounded-[32px]'>
        <p className='absolute text-orange font-["Poppins"] font-bold text-[56px] w-[364px] mt-[43px] ml-[72px]'>¡Celebrando los 25 años de GtT!</p>
        <img src={logo25} alt="25 aniversario GTT" className='absolute mt-[249px] ml-[74px]' />
        <p className='absolute text-green font-["Poppins"] font-medium text-2xl w-[473px] ml-[553px] mt-[56px]'>Acompáñanos en nuestro evento <span className='font-bold'>“Vida Positiva”</span> y forma parte de nuestra historia. Conoce sobre los últimos avances del VIH y conecta con los grandes profesionales del sector.</p>
        <a href="/">
          <img src={registrate} alt="Regístrate" className='absolute ml-[549px] mt-[248px]' />
        </a>
      </section>
      <section className='w-[1128px] h-[605px] my-20 ml-[206px]'>
        <p className='font-["Poppins"] text-green font-bold text-4xl'>Últimas noticias</p>
        <img src={biktarvy} alt="Biktarvy" className='absolute mt-[49px]' />
        <p className='absolute w-[550px] h-[120px] mt-[438px] text-[26px] font-["Poppins"] font-medium'>Biktarvy® se muestra efectivo y seguro en personas con el VIH mayores de 65 años tras 2 años de seguimiento</p>
        <p className='absolute w-[147.67px] h-[23px] mt-[542px] text-[16px] font-["Poppins"] font-normal text-[#A8A8A8]'>15-03-2023</p>
        <div className='absolute mt-[49px] ml-[576px] w-[552px] h-[536px]'>
          <div>
            <img src={multimorbilidad} alt="Manos ofreciendo medicamentos" className='absolute' />
            <p className='absolute w-[360px] h-[108px] text-[18px] ml-[192px] font-["Poppins"] font-semibold leading-[27px]'>CROI 2023: Elevada prevalencia de trastornos mentales y multimorbilidad por trastorno mental en personas con el VIHº</p>
            <p className='absolute w-[147.67px] h-[23px] mt-[118px] ml-[192px] text-[16px] font-["Poppins"] font-normal text-[#A8A8A8]'>13-03-2023</p>
          </div>
          <div>
            <img src={peso} alt="Mujer dando una conferencia en el CROI 2023" className='absolute mt-[180px]' />
            <p className='absolute w-[360px] h-[108px] text-[18px] mt-[180px] ml-[192px] font-["Poppins"] font-semibold leading-[27px]'>CROI 2023: Mayor riesgo de aumento de peso si se inicia el tratamiento antirretroviral durante la fase avanzada de la infección</p>
            <p className='absolute w-[147.67px] h-[23px] mt-[298px] ml-[192px] text-[16px] font-["Poppins"] font-normal text-[#A8A8A8]'>13-03-2023</p>
          </div>
          <div>
            <img src={semestral} alt="Hombre dando una conferencia en el CROI 2023" className='absolute mt-[360px]' />
            <p className='absolute w-[360px] h-[81px] text-[18px] mt-[360px] ml-[192px] font-["Poppins"] font-semibold leading-[27px]'>CROI 2023: Buenos resultados de un tratamiento antirretroviral completo de administración semestral</p>
            <p className='absolute w-[147.67px] h-[23px] mt-[451px] ml-[192px] text-[16px] font-["Poppins"] font-normal text-[#A8A8A8]'>10-03-2023</p>
          </div>
        </div>
      </section>
      <section className='w-[1441px] bg-yellow3 rounded-[32px] h-[532px] ml-[-49px] my-20'>
        <p className='absolute mt-[104px] ml-[229px] font-["Poppins"] text-green font-bold text-4xl'>Consúltanos</p>
        <p className='absolute w-[840px] mt-[164px] ml-[229px] font-["Poppins"] text-green font-medium text-[22px] leading-[28px]'>Déjanos tu consulta a través de nuestro servicio de atención e información para complementar la información proporcionada por tu médico.</p>
        <a href="/">
          <img src={whatsapp} alt="WhatsApp" className='absolute ml-[229px] mt-[281px]' />
        </a>
        <a href="/">
          <img src={telegram} alt="Telegram" className='absolute ml-[517px] mt-[281px]' />
        </a>
        <a href="/">
          <img src={facebook2} alt="Facebook" className='absolute ml-[805px] mt-[281px]' />
        </a>
        <a href="/">
          <img src={skype} alt="Skype" className='absolute ml-[1093px] mt-[281px]' />
        </a>
      </section>
      <section className='w-[1128px] h-[680px] my-20 ml-[206px]'>
        <p className='font-["Poppins"] text-green font-bold text-4xl'>Actualización en tratamientos</p>
        <img src={croi2023} alt="CROI 2023" className='mt-[49px]' />
        <div>
          <p className='absolute w-[264px] text-[26px] font-["Poppins"] font-medium leading-[39px]'>Cuarto Boletín Especial CROI 2023: Miércoles</p>
          <p className='absolute mt-[141px] text-[16px] font-["Poppins"] font-normal text-[#A8A8A8]'>01-03-2023</p>
        </div>
        <a href="/" className='absolute ml-[290px]'>
          <img src={play_arrow} alt="Flecha" />
        </a>
        <a href="/" className='absolute ml-[710px] mt-[14px]'>
          <img src={play_arrow} alt="Flecha" />
        </a>
        <a href="/" className='absolute ml-[290px] mt-[119px]'>
          <img src={play_arrow} alt="Flecha" />
        </a>
        <a href="/" className='absolute ml-[710px] mt-[133px]'>
          <img src={play_arrow} alt="Flecha" />
        </a>
        <p className='absolute w-[390px] font-["Poppins"] font-semibold text-lg leading-[27px] ml-[318px]'>Un prometedor nuevo método de PrEP supera el primer estudio de seguridad para el sexo anal</p>
        <p className='absolute w-[392px] font-["Poppins"] font-semibold text-lg leading-[27px] ml-[736px] mt-[14px]'>El uso de lenacapavir más anticuerpos ampliamente neutralizantes podría constituir una opción de tratamiento semestral</p>
        <p className='absolute w-[390px] font-["Poppins"] font-semibold text-lg leading-[27px] ml-[318px] mt-[119px]'>Las infecciones por el VIH que se produzcan a pesar de la PrEP inyectable pueden permanecer sin diagnosticar mucho tiempo</p>
        <p className='absolute w-[390px] font-["Poppins"] font-semibold text-lg leading-[27px] ml-[736px] mt-[133px]'>Enorme aumento en el uso de la PrEP cuando los servicios ofrecen opciones y flexibilidad</p>
      </section>
      <section className='w-[1128px] h-[504px] my-20 ml-[206px]'>
        <p className='w-[506px] font-["Poppins"] text-green font-bold text-4xl'>Aprende y cuida tu salud</p>
        <a href="/" className=''>
          <img src={verMas} alt="Ver más" className='absolute ml-[1028px]' />
        </a>
        <div className='w-screen absolute mt-[37px] h-[257px]'>
          <img src={covid} alt="Chico con mascarilla" className='absolute' />
          <img src={frio} alt="Pareja con abrigo arropados en la cama" className='absolute ml-[384px]' />
          <img src={viruela} alt="Viruela del mono" className='absolute ml-[768px]' />
        </div>
        <p className='absolute w-[360px] h-[158px] mt-[326px] text-[26px] font-["Poppins"] font-medium'>COVID y VIH: Información relevante sobre el SARS-CoV-2 para personas con el VIH.</p>
        <p className='absolute w-[360px] h-[158px] mt-[326px] ml-[384px] text-[26px] font-["Poppins"] font-medium'>Conservar la salud en los meses fríos </p>
        <p className='absolute w-[360px] h-[158px] mt-[326px] ml-[768px] text-[26px] font-["Poppins"] font-medium'>Viruela del mono: infórmate y reduce riesgos
        </p>
      </section>
      <section className='w-[1441px] bg-yellow3 rounded-[32px] h-[813px] ml-[109px] my-20'>
        <p className='absolute font-["Poppins"] text-green font-bold text-4xl mt-[96px] ml-[124px]'>Canal VIH</p>
        <a href="/" className=''>
          <img src={verMas} alt="Ver más" className='absolute mt-[116px] ml-[1084px]' />
        </a>
        <img src={opinion} alt="¿Qué opinión te merecen en general las vacunas?" className='absolute mt-[165px] ml-[124px]' />
        <a href="/" className='absolute ml-[138px] mt-[440px]'>
          <img src={play_circle} alt="Ver vídeo" />
        </a>
        <p className='absolute w-[550px] mt-[554px] ml-[124px] text-[26px] font-["Poppins"] font-medium leading-[39px]'>El VIH y la importancia de la prevención mediante la vacunación</p>
        <div className='absolute mt-[49px] ml-[706px] w-[552px] h-[536px]'>
          <div className='font-["Poppins"] text-[26px] font-medium leading-[39px] '>
            <img src={sabes} alt="Campaña SABES" className='absolute mt-[115px]' />
            <img src={miedo} alt="Campaña SABES" className='absolute mt-[300px]' />
            <img src={historia} alt="Campaña SABES" className='absolute mt-[486px]' />
            <a href="/" className='absolute ml-[12px] mt-[213px]'>
              <img src={play_circle} alt="Ver vídeo" />
            </a>
            <a href="/" className='absolute ml-[12px] mt-[397px]'>
              <img src={play_circle} alt="Ver vídeo" />
            </a>
            <a href="/" className='absolute ml-[12px] mt-[583px]'>
              <img src={play_circle} alt="Ver vídeo" />
            </a>
            <p className='absolute w-[360px] ml-[192px] mt-[115px]'>Campaña "SABES" con Javier Cámara #LoPositivoEsSaberlo</p>
            <p className='absolute w-[360px] ml-[192px] mt-[296px]'>Sin miedo al VIH 2018 (Documental)</p>
            <p className='absolute w-[360px] ml-[192px] mt-[486px]'>Cambia la historia (vídeo completo)</p>
          </div>
        </div>
      </section>
      <section className='w-[1128px] h-[434px] my-20 ml-[206px]'>
        <p className='absolute h-[45px] font-["Poppins"] font-bold text-[35.89px] text-green'>Este mes destacamos</p>
        <img src={destacamos} alt="Derechos, envejecimiento y VIH" className='absolute mt-[69px]' />
        <p className='absolute w-[454px] h-[38px] mt-[69px] ml-[672px] font-["Poppins"] font-medium text-[26px] leading-[38px]'>Derechos, envejecimiento y VIH</p>
        <p className='absolute w-[454px] h-[90px] mt-[123px] ml-[672px] font-["Roboto"] font-medium text-[22px]'>Programa de capacitación en derechos civiles, políticos y sociales, para personas mayores con el VIH</p>
        <a href="/">
          <img src={verMas} alt="Ver más" className='absolute mt-[261px] ml-[672px]' />
        </a>
      </section>
      <section className='w-[1128px] h-[504px] my-20 ml-[206px]'>
        <p className='w-[506px] font-["Poppins"] text-green font-bold text-4xl'>La comunidad habla</p>
        <a href="/" className=''>
          <img src={verMas} alt="Ver más" className='absolute ml-[1028px]' />
        </a>
        <div className='w-screen absolute mt-[37px] h-[257px]'>
          <img src={avelain} alt="Mr Avelain" className='absolute' />
          <img src={arteaga} alt="David Arteaga" className='absolute ml-[384px]' />
          <img src={fuster} alt="María José Fuster" className='absolute ml-[768px]' />
        </div>
        <p className='absolute w-[360px] h-[158px] mt-[326px] text-[22px] font-["Poppins"] font-medium'><span className='font-semibold'>Mr Avelain:</span> “La necesidad de buscar culpables es el mayor palo en la rueda”</p>
        <p className='absolute w-[360px] h-[158px] mt-[326px] ml-[384px] text-[22px] font-["Poppins"] font-medium'><span className='font-semibold'>David Arteaga:</span> “Las campañas contra el VIH no transmiten información, y eso se traduce en un mar de prejuicios”</p>
        <p className='absolute w-[360px] h-[158px] mt-[326px] ml-[768px] text-[22px] font-["Poppins"] font-medium'><span className='font-semibold'>María José Fuster:</span> “Hay que identificar los problemas que tienen los pacientes de VIH, y para eso hay que medir o preguntar”</p>
      </section>
      <section className='w-[1441px] bg-yellow3 rounded-[32px] h-[653px] ml-[-49px] my-20'>
        <p className='absolute ml-[248px] mt-[104px] text-4xl text-green font-bold font-["Poppins"] w-[506px] leading-[44px]'>Logros alcanzados en 2021</p>
        <div className='absolute w-[995px] h-[94px] ml-[305px] text-center font-["Poppins"] font-bold'>
          <div className='absolute mt-[214px]'>
            <p className='text-[48px] text-orange'>2.114.216</p>
            <p className='text-[22px] text-green'>Visitas al <br /> sitio web</p>
          </div>
          <div className='absolute ml-[395px] w-[216px] mt-[214px]'>
            <p className='text-[48px] text-orange'>73.678</p>
            <p className='text-[22px] text-green'>Visitas a la sección web de consultas</p>
          </div>
          <div className='absolute ml-[786px] w-[226px] mt-[214px]'>
            <p className='text-[48px] text-orange'>322,409</p>
            <p className='text-[22px] text-green'>Fichas de InfoVIHtal descargadas</p>
          </div>
        </div>
        <p className='absolute ml-[309px] mt-[361px] w-[987px] h-[120px] font-["Poppins"] font-medium text-[22px] text-center flex text-[#252525] leading-[28px]'>Tu donación puede marcar la diferencia en la vida de aquellos que luchan contra el VIH. Ayuda a financiar programas de atención médica, asesoramiento y prevención del VIH en comunidades vulnerables. Juntos, podemos acabar con el estigma y construir un futuro más saludable y esperanzador para todos.</p>
        <a
          href="/"
          className="absolute w-[361px] h-[56px] mt-[508px] ml-[624px] bg-yellow flex flex-row justify-center items-center pt-2 pb-5 pl-2 pr-6 gap-2.5 rounded-lg ml-8"
        >
          <img
            className="w-5 h-5 mt-2.5 ml-3"
            src={favorite}
            alt="Corazón"
          />
          <span className="text-white w-13 h-5 mt-2.5 font-['Poppins'] font-bold">DONAR</span>
        </a>
      </section>
      <section className='w-[1128px] h-[300px] my-20 ml-[206px]'>
        <p className='font-["Poppins"] text-green font-bold text-4xl'>Nuestros patrocinadores</p>
        <img src={abbVie} alt="AbbVie" className='absolute ml-8 mt-32' />
        <img src={msd} alt="msd" className='absolute ml-[360px] mt-[120px]' />
        <img src={gcp} alt="GCP" className='absolute ml-[638px] mt-[115px]' />
        <img src={viiv} alt="viiv" className='absolute ml-[950px] mt-[98px]' />
      </section>

      <section className='w-[1128px] h-[370px] ml-[207px]'>
        <img src={gente} alt="Gente" className='absolute' />
      </section>
    </main>
  )
}
