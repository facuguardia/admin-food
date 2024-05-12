import React from "react";

const Hero = () => {
  return (
    <section className="bg-cover bg-no-repeat bg-[url('https://img.freepik.com/free-photo/top-view-assortment-with-delicious-food-copy-space_23-2148308904.jpg?t=st=1715463469~exp=1715467069~hmac=3e8ddbdb79d015ae18026b41d1015dc1d4865d2a1e1c9ccf1720c7bcec943dc3&w=1380')] bg-gray-700 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          ¡Disfruta del Buen Sabor en cada bocado!
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          En El Buen Sabor, fusionamos calidad y tradición en cada plato. Desde
          nuestras deliciosas pizzas hasta nuestras jugosas hamburguesas, cada
          opción está preparada con los mejores ingredientes para brindarte una
          experiencia gastronómica inigualable.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black hover:text-white rounded-lg bg-orange-300 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-900"
          >
            Explora nuestro menú
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            ¡Hacé tu Pedido!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
