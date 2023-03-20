import group1 from '../../../assets/group1.svg';
import send from '../../../assets/send.svg';

export default function Home() {
  return (
    <main>
      <section className="w-[1368px] bg-[#F9EEE1] rounded-[32px] h-[640px] mt-36 mx-6">
        <img src={group1} alt="Gente" className="mt-[6px] ml-[520px] absolute" />
        <form action="/">
          <input type="text" className="w-[417px] h-[115px] ml-[120px] mt-[465px] shadow-md rounded absolute" />
          <img src={send} alt="Enviar" className='absolute ml-[509px] mt-[552px]' />
        </form>
        <p className='absolute text-xl text-green font-medium w-[509px] ml-[120px] mt-[207px]'>Sabemos que recibir un diagnóstico de VIH puede ser abrumador y puede haber muchas preguntas que surjan. Pero no estás sol@. Estamos aquí para ayudarte y brindarte información veraz y útil.</p>
        <p className='absolute text-xl text-green font-bold w-[250px] ml-[120px] mt-[340px]'>Pregunta lo que quieras:</p>
        <p className='absolute text-[62px] text-orange font-bold ml-[120px] mt-[102px]'>Chat gTt</p>
      </section>
    </main>
  )
}
