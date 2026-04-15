import { useState, useEffect } from "react";

const EVENT_DATE = new Date("April 18, 2026 18:00:00").getTime();

export default function PrimerAnitoMoana() {
  useEffect(() => {
    document.title = "Primer Añito - Moana";
  }, []);

  const [timeLeft, setTimeLeft] = useState({
    dias: "00",
    horas: "00",
    minutos: "00",
    segundos: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = EVENT_DATE - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      const dias = Math.floor(distance / (1000 * 60 * 60 * 24));
      const horas = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        dias: String(dias).padStart(2, "0"),
        horas: String(horas).padStart(2, "0"),
        minutos: String(minutos).padStart(2, "0"),
        segundos: String(segundos).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[100vh] w-full overflow-hidden font-sans bg-white">
      <div
        className="absolute inset-0 bg-cover bg-bottom bg-fixed bg-no-repeat"
        style={{ backgroundImage: "url('/moana/bg.svg')" }}
      />

      {/* Decoración Izquierda */}
      <img
        src="/moana/izq.svg"
        alt=""
        className="absolute -left-4 top-1/2 -translate-y-1/2 w-40 lg:w-72 pointer-events-none z-0"
      />

      {/* Decoración Derecha */}
      <img
        src="/moana/der.svg"
        alt=""
        className="absolute -right-4 top-1/2 -translate-y-1/2 w-40 lg:w-72 pointer-events-none z-0"
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full p-2 py-6 md:p-12 text-center gap-2 md:gap-16 min-h-[100vh]">
        {/* Lado Izquierdo: Imagen de Moana */}
        <div className="relative w-64 h-64 md:w-[500px] md:h-[500px] flex-shrink-0 animate-fade-in-up mt-2 md:mt-0 order-3 md:order-1">
          <img
            src="/moana/main.png"
            alt="Moana"
            className="w-full h-full object-contain relative z-10"
          />
          <img
            src="/moana/main-1.png"
            alt="1er Añito"
            className="absolute -top-4 left-2 md:-top-8 md:left-8 w-24 md:w-48 h-auto object-contain z-0 drop-shadow-lg"
          />
        </div>

        {/* Lado Derecho: Textos y Contador */}
        <div className="contents md:flex md:flex-col items-center justify-center w-full md:w-auto order-3 md:order-2">
          <div className="mb-0 md:mb-2 animate-fade-in-up delay-100 order-1 md:order-1 mt-4 md:mt-0">
            <h1 className="font-oleo font-normal text-[2.2rem] md:text-6xl text-[#ec4899] tracking-wide">
              Mi primer añito
            </h1>
          </div>

          <div className="flex flex-col items-center justify-center space-y-0.5 animate-fade-in-up delay-200 mt-1 md:mt-4 order-4 md:order-2">
            <p className="text-[#3b4b56] font-sans font-normal text-xs md:text-xl tracking-wide">
              Te invitamos a celebrar con nosotros
            </p>
            <p className="text-[#3b4b56] font-sans font-normal text-xs md:text-xl tracking-wide">
              el primer añito de nuestra bebé
            </p>
          </div>

          <div className="relative flex items-center justify-center w-56 md:w-96 h-20 md:h-40 mx-auto mb-1 mt-0 animate-fade-in-up delay-300 md:mt-4 order-2 md:order-3">
            <img
              src="/moana/madera.svg"
              alt="Cartel madera"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none z-0"
            />
            <h2 className="relative z-10 font-oleo font-normal text-[2.2rem] md:text-6xl text-[#fff8e7] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] leading-tight text-center mt-2">
              Maily
            </h2>
          </div>

          <p className="text-[#3b4b56] mt-1 mb-2 md:mt-6 md:mb-4 text-sm md:text-xl font-normal animate-fade-in-up delay-400 order-5 md:order-4">
            Faltan
          </p>

          <div className="bg-[#ec4899] rounded-xl shadow-[0_4px_14px_rgba(236,72,153,0.4)] flex divide-x divide-white p-1.5 md:p-2 mb-2 animate-fade-in-up delay-500 w-fit order-6 md:order-5">
            <div className="flex flex-col items-center justify-center w-16 md:w-24 py-1">
              <span className="text-2xl md:text-4xl font-bold text-white tracking-wide">
                {timeLeft.dias}
              </span>
              <span className="text-[10px] md:text-[13px] text-white font-medium mt-0.5 tracking-wider capitalize">
                Días
              </span>
            </div>
            <div className="flex flex-col items-center justify-center w-14 md:w-20 py-1">
              <span className="text-2xl md:text-4xl font-bold text-white tracking-wide">
                {timeLeft.horas}
              </span>
              <span className="text-[10px] md:text-[13px] text-white font-medium mt-0.5 tracking-wider capitalize">
                Hr
              </span>
            </div>
            <div className="flex flex-col items-center justify-center w-14 md:w-20 py-1">
              <span className="text-2xl md:text-4xl font-bold text-white tracking-wide">
                {timeLeft.minutos}
              </span>
              <span className="text-[10px] md:text-[13px] text-white font-medium mt-0.5 tracking-wider capitalize">
                Min
              </span>
            </div>
            <div className="flex flex-col items-center justify-center w-14 md:w-20 py-1">
              <span className="text-2xl md:text-4xl font-bold text-white tracking-wide">
                {timeLeft.segundos}
              </span>
              <span className="text-[10px] md:text-[13px] text-white font-medium mt-0.5 tracking-wider capitalize">
                Seg
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
