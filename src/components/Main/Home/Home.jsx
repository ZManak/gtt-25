import group1 from '../../../assets/group1.svg';
import send from '../../../assets/send.svg';
import favorite from '../../../assets/favorite.svg';

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
      <section className='w-[1128px] h-[489px] my-6 ml-[156px]'>
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
    </main>
  )
}
