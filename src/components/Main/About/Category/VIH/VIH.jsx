import vih from '../../../../../assets/vih.svg';
import play_arrow from '../../../../../assets/play_arrow.svg';
import { Link } from 'react-router-dom';

export default function VIH() {
    return (
        <main>
            <section className='w-screen h-[700px] mt-[144px]'>
                <img src={vih} alt="VIH" className='absolute mt-[48px] ml-[156px]' />
                <p className="absolute mt-[64px] ml-[276px] text-orange text-[57px] font-bold font-['Poppins'] leading-[64px]">Cómo funciona el VIH</p>
                <p className="absolute mt-[192px] ml-[160px] w-[932px] h-10 text-black text-[29px] font-normal font-['Roboto'] leading-[40px]">Datos básicos sobre el sistema inmunológico, el ciclo <br />de vida del VIH, cómo el VIH afecta el cuerpo y los síntomas.</p>
                <div className='absolute mt-[316px] w-[284px] ml-[156px]'>
                    <Link to={"/"}>
                        <img src={play_arrow} alt="Flecha" className='absolute w-6 h-6' />
                        <p className='absolute font-["Poppins"] font-medium text-[18px] ml-[40px]'>¿Qué es el VIH?</p>
                    </Link>
                </div>
                <div className='absolute mt-[376px] w-[284px] ml-[156px]'>
                    <Link to={"/"}>
                        <img src={play_arrow} alt="Flecha" className='absolute w-6 h-6' />
                        <p className='absolute font-["Poppins"] font-medium text-[18px] ml-[40px]'>¿Cuáles son los síntomas del VIH?</p>
                    </Link>
                </div>
                <div className='absolute mt-[436px] w-[284px] ml-[156px]'>
                    <Link to={"/"}>
                        <img src={play_arrow} alt="Flecha" className='absolute w-6 h-6' />
                        <p className='absolute font-["Poppins"] font-medium text-[18px] ml-[40px]'>Infeccion muy reciente</p>
                    </Link>
                </div>
                <div className='absolute mt-[496px] w-[284px] ml-[156px]'>
                    <Link to={"/"}>
                        <img src={play_arrow} alt="Flecha" className='absolute w-6 h-6' />
                        <p className='absolute font-["Poppins"] font-medium text-[18px] ml-[40px]'>Infección primaria y aguda por VIH</p>
                    </Link>
                </div>
                <div className='absolute mt-[556px] w-[284px] ml-[156px]'>
                    <Link to={"/"}>
                        <img src={play_arrow} alt="Flecha" className='absolute w-6 h-6' />
                        <p className='absolute font-["Poppins"] font-medium text-[18px] ml-[40px]'>¿Cuáles son los síntomas de la seroconversión?</p>
                    </Link>
                </div>
                <div className='absolute mt-[316px] w-[284px] ml-[444px]'>
                    <Link to={"/"}>
                        <img src={play_arrow} alt="Flecha" className='absolute w-6 h-6' />
                        <p className='absolute font-["Poppins"] font-medium text-[18px] ml-[40px]'>El VIH y el sistema inmunológico</p>
                    </Link>
                </div>
                <div className='absolute mt-[376px] w-[284px] ml-[444px]'>
                    <Link to={"/"}>
                        <img src={play_arrow} alt="Flecha" className='absolute w-6 h-6' />
                        <p className='absolute font-["Poppins"] font-medium text-[18px] ml-[40px]'>Mitos y hechos</p>
                    </Link>
                </div>
                <div className='absolute mt-[436px] w-[284px] ml-[444px]'>
                    <Link to={"/"}>
                        <img src={play_arrow} alt="Flecha" className='absolute w-6 h-6' />
                        <p className='absolute font-["Poppins"] font-medium text-[18px] ml-[40px]'>Los estadios de la infección por VIH</p>
                    </Link>
                </div>
                <div className='absolute mt-[496px] w-[284px] ml-[444px]'>
                    <Link to={"/"}>
                        <img src={play_arrow} alt="Flecha" className='absolute w-6 h-6' />
                        <p className='absolute font-["Poppins"] font-medium text-[18px] ml-[40px]'>VIH-1 y VIH-2</p>
                    </Link>
                </div>
                <div className='absolute mt-[556px] w-[284px] ml-[444px]'>
                    <Link to={"/"}>
                        <img src={play_arrow} alt="Flecha" className='absolute w-6 h-6' />
                        <p className='absolute font-["Poppins"] font-medium text-[18px] ml-[40px]'>Los subtipos de VIH</p>
                    </Link>
                </div>
                <div className='absolute mt-[316px] w-[284px] ml-[732px]'>
                    <Link to={"/"}>
                        <img src={play_arrow} alt="Flecha" className='absolute w-6 h-6' />
                        <p className='absolute font-["Poppins"] font-medium text-[18px] ml-[40px]'>¿Cuál es la diferencia entre el VIH y el SIDA?</p>
                    </Link>
                </div>
                <div className='absolute mt-[376px] w-[284px] ml-[732px]'>
                    <Link to={"/"}>
                        <img src={play_arrow} alt="Flecha" className='absolute w-6 h-6' />
                        <p className='absolute font-["Poppins"] font-medium text-[18px] ml-[40px]'>¿Cuánto tiempo se puede vivir con VIH?</p>
                    </Link>
                </div>
                <div className='absolute mt-[436px] w-[284px] ml-[732px]'>
                    <Link to={"/"}>
                        <img src={play_arrow} alt="Flecha" className='absolute w-6 h-6' />
                        <p className='absolute font-["Poppins"] font-medium text-[18px] ml-[40px]'>¿Se puede curar el VIH?</p>
                    </Link>
                </div>
                <div className='absolute mt-[496px] w-[284px] ml-[732px]'>
                    <Link to={"/"}>
                        <img src={play_arrow} alt="Flecha" className='absolute w-6 h-6' />
                        <p className='absolute font-["Poppins"] font-medium text-[18px] ml-[40px]'>¿De dónde viene el VIH?</p>
                    </Link>
                </div>
                <div className='absolute mt-[556px] w-[284px] ml-[732px]'>
                    <Link to={"/"}>
                        <img src={play_arrow} alt="Flecha" className='absolute w-6 h-6' />
                        <p className='absolute font-["Poppins"] font-medium text-[18px] ml-[40px]'>Ciclo de vida del VIH</p>
                    </Link>
                </div>
            </section>
        </main>
    )
}