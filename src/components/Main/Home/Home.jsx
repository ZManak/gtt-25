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

export default function Home() {
  return (
    <main>
      <section className="w-[1368px] bg-orange3 rounded-[32px] h-[617px] mt-36 mx-6">
        <img src={group1} alt="Gente" className="mt-[-12px] ml-[520px] absolute" />
        <form action="/">
          <input type="text" className="w-[417px] h-[115px] ml-[120px] mt-[430px] shadow-md rounded absolute" />
          <img src={send} alt="Enviar" className='absolute ml-[509px] mt-[520px]' />
        </form>
        <p className='absolute text-[21.36px] text-green font-medium font-["Roboto"] w-[509px] ml-[120px] mt-[192px] leading-[30.36px]'>Sabemos que recibir un diagnóstico de VIH puede ser abrumador y puede haber muchas preguntas que surjan. Pero no estás solx. Estamos aquí para ayudarte y brindarte información veraz y útil.</p>
        <p className='absolute text-[22px] text-green font-bold w-[270px] ml-[120px] mt-[340px]'>Pregunta lo que quieras:</p>
        <p className='absolute text-[57px] text-orange font-bold ml-[120px] mt-16 leading-[64px]'>Chat gTt</p>
      </section>
      <section className='w-[1128px] h-[489px] my-16 ml-[156px]'>
        <p className='absolute text-4xl text-green font-bold font-["Poppins"] w-[506px] leading-[44px]'>Logros alcanzados en 2021</p>
        <div className='absolute w-[995px] h-[94px] ml-[67px] text-green text-center font-["Poppins"] font-bold'>
          <div className='absolute mt-[117px]'>
            <p className='text-[48px]'>2.114.216</p>
            <p className='text-[22px]'>Visitas al sitio web</p>
          </div>
          <div className='absolute ml-[395px] w-[216px] mt-[107px]'>
            <p className='text-[48px]'>73.678</p>
            <p className='text-[22px]'>Visitas a la sección web de consultas</p>
          </div>
          <div className='absolute ml-[786px] w-[226px] mt-[107px]'>
            <p className='text-[48px]'>322,409</p>
            <p className='text-[22px]'>Fichas de InfoVIHtal descargadas</p>
          </div>
        </div>
        <p className='absolute ml-[161px] mt-[237px] w-[817px] h-[120px] font-["Roboto"] font-normal text-[18px] text-center tracking-[.5px] flex text-[#252525] leading-7'>Tu donación puede marcar la diferencia en la vida de aquellos que luchan contra el VIH. Ayuda a financiar programas de atención médica, asesoramiento y prevención del VIH en comunidades vulnerables. Juntos, podemos acabar con el estigma y construir un futuro más saludable y esperanzador para todos.</p>
        <a
          href="/"
          className="absolute w-[361px] h-[56px] mt-[389px] ml-[384px] bg-orange flex flex-row justify-center items-center pt-2 pb-5 pl-2 pr-6 gap-2.5 rounded-lg ml-8"
        >
          <img
            className="w-5 h-5 mt-2.5 ml-3"
            src={favorite}
            alt="Corazón"
          />
          <span className="text-white w-13 h-5 mt-2.5">DONAR</span>
        </a>
      </section>
      <section className='w-[1128px] h-[434px] my-16 ml-[156px]'>
        <p className='absolute h-[45px] font-["Poppins"] font-bold text-[35.89px] text-green'>Este mes destacamos</p>
        <img src={destacamos} alt="Derechos, envejecimiento y VIH" className='absolute mt-[69px]' />
        <p className='absolute w-[454px] h-[38px] mt-[69px] ml-[672px] font-["Poppins"] font-medium text-[26px] leading-[38px]'>Derechos, envejecimiento y VIH</p>
        <p className='absolute w-[454px] h-[90px] mt-[123px] ml-[672px] font-["Roboto"] font-medium text-[22px]'>Programa de capacitación en derechos civiles, políticos y sociales, para personas mayores con el VIH</p>
        <a href="/">
          <img src={verMas} alt="Ver más" className='absolute mt-[261px] ml-[672px]' />
        </a>
      </section>
      <section className='w-[1128px] h-[504px] my-16 ml-[156px]'>
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
      <section className='w-[1128px] h-[605px] my-16 ml-[156px]'>
        <p className='w-[506px] font-["Poppins"] text-green font-bold text-4xl'>Últimas noticias</p>
        <img src={biktarvy} alt="Biktarvy" className='absolute mt-[49px]' />
        <p className='absolute w-[550px] h-[120px] mt-[438px] text-[26px] font-["Poppins"] font-medium'>Biktarvy® se muestra efectivo y seguro en personas con el VIH mayores de 65 años tras 2 años de seguimiento</p>
        <p className='absolute w-[147.67px] h-[23px] mt-[542px] text-[16px] font-["Poppins"] font-normal text-[#A8A8A8]'>15-03-2023</p>
        <div className='absolute mt-[49px] ml-[576px] w-[552px] h-[536px] '>
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
    </main>
  )
}
