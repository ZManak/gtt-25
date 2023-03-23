import recienDiagnosticado from '../../../assets/recienDiagnosticado.svg';
import pruebas from '../../../assets/pruebas.svg';
import tratamiento from '../../../assets/tratamiento.svg';
import comoFunciona from '../../../assets/comoFunciona.svg';
import prevencion from '../../../assets/prevencion.svg';
import prep from '../../../assets/prep.svg';
import salud from '../../../assets/salud.svg';
import servicios from '../../../assets/servicios.svg';
import saludable from '../../../assets/saludable.svg';
import sexualidad from '../../../assets/sexualidad.svg';
import sociales from '../../../assets/sociales.svg';
import glosario from '../../../assets/glosario.svg';
import videos from '../../../assets/videos.svg';
import { Link } from 'react-router-dom'


export default function About() {
    return (
        <main>
            <section className='w-screen h-[1250px]'>
                <p className="absolute mt-[208px] ml-[156px] h-16 text-orange text-[57px] font-bold font-['Poppins'] leading-[64px]">Sobre el VIH</p>
                <p className="absolute mt-[228px] ml-[533px] h-10 text-black text-[29px] font-normal font-['Poppins'] leading-[40px]">Información clara y confiable sobre el VIH</p>
                <div className='absolute mt-[336px] ml-[156px] rounded-2xl w-[264px] h-[159px] bg-orange3 '>
                    <img src={recienDiagnosticado} alt="Recién diagnosticado con VIH" className='absolute mt-6 ml-6' />
                    <p className='abosolute mt-[79px] ml-6 w-[216px] font-["Poppins"] font-medium text-lg'>Recién diagnosticado con VIH</p>
                </div>
                <div className='absolute mt-[336px] ml-[444px] rounded-2xl w-[264px] h-[159px] bg-orange3 '>
                    <img src={pruebas} alt="Recién diagnosticado con VIH" className='absolute mt-6 ml-6' />
                    <p className='abosolute mt-[79px] ml-6 w-[216px] font-["Poppins"] font-medium text-lg'>Pruebas y control sanitario</p>
                </div>
                <div className='absolute mt-[336px] ml-[732px] rounded-2xl w-[264px] h-[159px] bg-orange3 '>
                    <img src={tratamiento} alt="Recién diagnosticado con VIH" className='absolute mt-6 ml-6' />
                    <p className='abosolute mt-[79px] ml-6 w-[216px] font-["Poppins"] font-medium text-lg'>Tratamiento del VIH</p>
                </div>
                <Link to={"/como-funciona-el-vih"}>
                    <div className='absolute mt-[336px] ml-[1020px] rounded-2xl w-[264px] h-[159px] bg-orange3 '>
                        <img src={comoFunciona} alt="Recién diagnosticado con VIH" className='absolute mt-6 ml-6' />
                        <p className='abosolute mt-[79px] ml-6 w-[216px] font-["Poppins"] font-medium text-lg'>Cómo funciona el VIH</p>
                    </div>
                </Link>

                <div className='absolute mt-[519px] ml-[156px] rounded-2xl w-[264px] h-[159px] bg-orange3 '>
                    <img src={prevencion} alt="Recién diagnosticado con VIH" className='absolute mt-6 ml-6' />
                    <p className='abosolute mt-[79px] ml-6 w-[216px] font-["Poppins"] font-medium text-lg'>Transmisión
                        y prevención</p>
                </div>
                <div className='absolute mt-[519px] ml-[444px] rounded-2xl w-[264px] h-[159px] bg-orange3 '>
                    <img src={prep} alt="Recién diagnosticado con VIH" className='absolute mt-6 ml-6' />
                    <p className='abosolute mt-[79px] ml-6 w-[216px] font-["Poppins"] font-medium text-lg'>PrEP</p>
                </div>
                <div className='absolute mt-[519px] ml-[732px] rounded-2xl w-[264px] h-[159px] bg-orange3 '>
                    <img src={salud} alt="Recién diagnosticado con VIH" className='absolute mt-6 ml-6' />
                    <p className='abosolute mt-[79px] ml-6 w-[216px] font-["Poppins"] font-medium text-lg'>Problemas de salud y envejecimiento</p>
                </div>
                <div className='absolute mt-[519px] ml-[1020px] rounded-2xl w-[264px] h-[159px] bg-orange3 '>
                    <img src={servicios} alt="Recién diagnosticado con VIH" className='absolute mt-6 ml-6' />
                    <p className='abosolute mt-[79px] ml-6 w-[216px] font-["Poppins"] font-medium text-lg'>Servicios y sistemas
                        de salud</p>
                </div>
                <div className='absolute mt-[702px] ml-[156px] rounded-2xl w-[264px] h-[159px] bg-orange3 '>
                    <img src={saludable} alt="Recién diagnosticado con VIH" className='absolute mt-6 ml-6' />
                    <p className='abosolute mt-[79px] ml-6 w-[216px] font-["Poppins"] font-medium text-lg'>Vida saludable</p>
                </div>
                <div className='absolute mt-[702px] ml-[444px] rounded-2xl w-[264px] h-[159px] bg-orange3 '>
                    <img src={sexualidad} alt="Recién diagnosticado con VIH" className='absolute mt-6 ml-6' />
                    <p className='abosolute mt-[79px] ml-6 w-[216px] font-["Poppins"] font-medium text-lg'>Sexualidad y VIH</p>
                </div>
                <div className='absolute mt-[702px] ml-[732px] rounded-2xl w-[264px] h-[159px] bg-orange3 '>
                    <img src={sociales} alt="Recién diagnosticado con VIH" className='absolute mt-6 ml-6' />
                    <p className='abosolute mt-[79px] ml-6 w-[216px] font-["Poppins"] font-medium text-lg'>Cuestiones sociales y legales</p>
                </div>
                <div className='absolute mt-[702px] ml-[1020px] rounded-2xl w-[264px] h-[159px] bg-orange3 '>
                    <img src={glosario} alt="Recién diagnosticado con VIH" className='absolute mt-6 ml-6' />
                    <p className='abosolute mt-[79px] ml-6 w-[216px] font-["Poppins"] font-medium text-lg'>Glosario</p>
                </div>
                <div className='absolute mt-[885px] ml-[156px] rounded-2xl w-[264px] h-[159px] bg-orange3 '>
                    <img src={videos} alt="Recién diagnosticado con VIH" className='absolute mt-6 ml-6' />
                    <p className='abosolute mt-[79px] ml-6 w-[216px] font-["Poppins"] font-medium text-lg'>Videos</p>
                </div>
            </section>
        </main>
    )
}