import React from "react";

import ImageProfile from "../assets/img-perfil.png";

function About() {
  return (
    <section className="pt-10 overflow-hidden bg-gray-50 dark:bg-[#111827] md:pt-0 sm:pt-16 2xl:pt-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
              Descubre la Historia de <br className="block sm:hidden" />
              <br className="hidden sm:block" />
              El Buen Sabor
            </h2>
            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
              En El Buen Sabor, no solo se trata de comida, se trata de una
              pasión transmitida de generación en generación. Desde nuestros
              humildes comienzos en una pequeña cocina familiar hasta
              convertirnos en un punto de referencia en la comunidad, nos hemos
              comprometido a ofrecer sabores auténticos y una experiencia
              culinaria única para nuestros clientes. Cada plato que servimos
              está impregnado con el amor y la dedicación que nos caracteriza, y
              cada visita a nuestro local es una oportunidad para compartir
              nuestra historia contigo.
            </p>

            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
              <span className="relative inline-block">
                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                <span className="relative">
                  {" "}
                  Hola, soy Esteban <br /> Desarrollador java junior y creador
                  de este proyecto.
                </span>

                <br />
                <br />
                <span className="relative">
                  {" "}
                  Queres conocerme más? Encontrame en{" "}
                  <a
                    href="#"
                    title=""
                    className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline"
                  >
                    LinkedIn
                  </a>
                </span>
              </span>
            </p>
          </div>

          <div className="relative">
            <img
              className="absolute inset-x-0 bottom-0 -mb-48 rounded-t-full -translate-x-1/2 left-1/2"
              src="https://static.wixstatic.com/media/302a41_2a8c6ff0890b400aaeeada1b729e277a~mv2.jpg/v1/crop/x_569,y_0,w_1851,h_2005/fill/w_982,h_1064,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pexels-pixabay-235985_edited.jpg"
              alt=""
            />

            <img
              className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom"
              src={ImageProfile}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
