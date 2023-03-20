import group1 from '../../../assets/group1.svg';
import send from '../../../assets/send.svg';

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
    </main>
  )
}
