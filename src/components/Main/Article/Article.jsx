import React from 'react';
import quees from '../../../assets/que-es.svg';

const Article = () => {
  return (
    <section>
      <div className="w-screen mt-36 ml-[200px] mb-[15px]">
        <img src={quees} alt="quees" />
      </div>
      <section className="">
        <div className="flex">
          <div className="ml-[200px] mr-[700px] pt-[36px] font-['Poppins'] text-lg">
            <p className="text-orange font">Cómo funciona el VIH</p>
            <h1>¿Qué es el VIH?</h1>
            <h3>21/02/2017</h3>
            <br />
            <p>
              Los virus son agentes infecciosos que no tienen la capacidad de
              reproducirse por sí mismos, sino que para ello necesitan infectar
              células de otros organismos, las cuales se denominan células
              huésped. El Virus de la Inmunodeficiencia Humana (VIH) es un virus
              de la familia de los retrovirus que afecta a las células del
              sistema inmunitario del ser humano, el responsable de la defensa
              de nuestro organismo frente a agentes externos.
            </p>
            <br />

            <p>
              Para poder reproducirse, los virus necesitan introducir su
              información genética en el genoma de las células huésped. La
              familia de los retrovirus se caracteriza por contener su
              información genética en forma de ARN (ácido ribonucleico) en lugar
              de ADN (ácido desoxirribonucleico). Esto significa que el VIH
              necesita convertir su ARN en ADN, para que éste se pueda insertar
              en el genoma de la célula huésped y el virus pueda replicarse, es
              decir hacer copias de sí mismo. Esta conversión se realiza a
              través de una enzima denominada transcriptasa inversa, o
              retrotranscriptasa, de donde toma su nombre la familia de virus.
            </p>
            <br />

            <p>
              En el caso del VIH, las células huésped que resultan infectadas
              son un tipo de linfocitos (glóbulos blancos) cuya superficie
              presenta una proteína en forma de antena llamada receptor CD4.
              Aunque puede afectar también a otras células del sistema
              inmunitario, el virus tiene como preferencia los linfocitos T CD4
              (también conocidos simplemente como células CD4) para
              reproducirse. Los linfocitos T CD4 desempeñan un papel fundamental
              en la coordinación de la respuesta inmunitaria. Por este motivo,
              al destruir las células CD4, la infección por VIH debilita el
              sistema inmunitario e impide que este siga cumpliendo su función
              habitual lo que provoca un deterioro gradual de la salud de la
              persona afectada.
            </p>
            <br />

            <p>
              Durante un tiempo, que varía de unos meses a varios años según la
              persona, el sistema inmunitario es capaz de producir suficientes
              células CD4 para sustituir las infectadas y además intentar
              controlar la replicación del VIH. Pero sin un tratamiento
              adecuado, el virus es capaz de colonizar todo el organismo,
              provocando una gran disminución en el número de células CD4. En
              tal caso, el sistema inmunitario se deteriora hasta el punto de
              que no es capaz de hacer frente a infecciones y enfermedades que
              habitualmente son inofensivas. Es entonces cuando aparece el
              Síndrome de la Inmunodeficiencia Adquirida, o sida.
            </p>
            <br />
            <p className="">
              <b>Fuentes:</b> Grupo de Estudio del Sida (GeSIDA) y Sociedad
              Española Interdisciplinaria del Sida (SEISIDA). Documento
              informativo sobre la infección por el VIH. 2017. Aidsmap (Entidad
              certificada por The Information Standard, perteneciente al
              Servicio Nacional de Salud Británico [NHS]).
            </p>
            <br />
            <ul className="inline">
              <li>
                <a href="#">Temática 1</a>
              </li>
              <li>
                <a href="#">Temática 2</a>
              </li>
              <li>
                <a href="#">Temática 3</a>
              </li>
            </ul>
          </div>
          <div className="absolute rounded-2xl w-[300px] h-[159px] bg-orange3 ml-[1100px] mt-[100px]">
            <p className='abosolute ml-6 w-[216px] p-[10px] ml-[10px] font-["Poppins"] font-medium text-lg'>
              Sigue leyendo
            </p>
            <ul className="p-[10px]">
              <li>
                <a href="#">¿Cuál es la diferencia entre el VIH y el SIDA?</a>
              </li>
              <li>
                <a href="#">El VIH y el sistema inmunológico</a>
              </li>
              <li>
                <a href="#">Mitos y hechos</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Article;
