import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import questionImg from '../../../assets/question.png';
import play_arrow from '../../../assets/play_arrow.svg';
import chatLogo from '../../../assets/chatLogo.png';
import si from '../../../assets/si.png';
import no from '../../../assets/no.png';
import respuestaSi from '../../../assets/respuestaSi.png';
import respuestaNo from '../../../assets/respuestaNo.png';

export default function Chat() {
  const { msg } = useParams();
  const [showSi, setShowSi] = useState(false);
  const [showNo, setShowNo] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [article1, setArticle1] = useState(null);
  const [article2, setArticle2] = useState(null);
  const [article3, setArticle3] = useState(null);

  const handleImageClickSi = () => {
    setShowSi(true);
  };
  const handleImageClickNo = () => {
    setShowNo(true);
  };

  const handleImageClose = () => {
    setShowSi(false);
    setShowNo(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          'https://ec2-3-128-94-58.us-east-2.compute.amazonaws.com/chat',
          {
            question: msg,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          }
        );
        setAnswer(response.data.answer);
        setArticle1(response.data.recommendations[0].title);
        setArticle2(response.data.recommendations[1].title);
        setArticle3(response.data.recommendations[2].title);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <section
        className="w-screen h-[1050px] mt-[144px]"
        style={{ display: showSi || showNo ? 'none' : 'block' }}
      >
        <p className='absolute text-[57px] font-bold text-orange font-["Poppins"] ml-[156px] mt-[64px]'>
          Chat gTt
        </p>
        <img
          src={questionImg}
          alt="Aquí empieza tu pregunta"
          className="absolute ml-[156px] mt-[192px]"
        />
        <p className='absolute text-[18px] font-["Roboto"] font-normal ml-[252px] mt-[200px] w-[932px]'>
          {msg}?
        </p>
        <div className="absolute w-[1128px] bg-[#F1EDEB] h-[588px] ml-[156px] mt-[276px] rounded-[12px]">
          <img
            src={chatLogo}
            alt="GTT"
            className="absolute ml-[28px] mt-[32px] "
          />
          <p className='absolute w-[932px] text-[18px] font-["Roboto"] font-normal ml-[96px] mt-[40px]'>
            {answer}
          </p>
          <img
            src={play_arrow}
            alt="Flecha"
            className="absolute ml-[102px] mt-[447px]"
          />
          <img
            src={play_arrow}
            alt="Flecha"
            className="absolute ml-[390px] mt-[447px]"
          />
          <img
            src={play_arrow}
            alt="Flecha"
            className="absolute ml-[678px] mt-[447px]"
          />
          <p className='absolute w-[233px] ml-[136px] mt-[442px] text-[18px] font-["Poppins"] font-medium'>
            {article1}
          </p>
          <p className='absolute w-[233px] ml-[424px] mt-[442px] text-[18px] font-["Poppins"] font-medium'>
            {article2}
          </p>
          <p className='absolute w-[233px] ml-[712px] mt-[442px] text-[18px] font-["Poppins"] font-medium'>
            {article3}
          </p>
        </div>
        <p className='absolute mt-[904px] ml-[252px] font-["Roboto"] font-normal'>
          ¿Hemos resuelto tus dudas?
        </p>
        <img
          src={si}
          alt="Sí"
          className="absolute ml-[252px] mt-[950px]"
          onClick={handleImageClickSi}
        />
        <img
          src={no}
          alt="No"
          className="absolute ml-[444px] mt-[950px]"
          onClick={handleImageClickNo}
        />
      </section>
      {showSi ? (
        <section
          className="w-screen h-[1050px] mt-[144px]"
          onClick={handleImageClose}
        >
          <img
            src={respuestaSi}
            alt="Respuesta sí"
            className="absolute ml-[156px] mt-[200px]"
          />
        </section>
      ) : null}
      {showNo ? (
        <section
          className="w-screen h-[1050px] mt-[144px]"
          onClick={handleImageClose}
        >
          <img
            src={respuestaNo}
            alt="Respuesta no"
            className="absolute ml-[156px] mt-[200px]"
          />
        </section>
      ) : null}
    </main>
  );
}
