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

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full p-4 md:p-12 text-center gap-4 md:gap-16">
        {/* Lado Izquierdo: Imagen de Moana */}
        <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] flex-shrink-0 animate-fade-in-up mt-12 md:mt-0">
          <img
            src="/moana/main.png"
            alt="Moana"
            className="w-full h-full object-contain relative z-10"
          />
          <img
            src="/moana/main-1.png"
            alt="1er Añito"
            className="absolute -top-4 left-4 md:-top-8 md:left-8 w-28 md:w-48 h-auto object-contain z-0 drop-shadow-lg"
          />
        </div>

        {/* Lado Derecho: Textos y Contador */}
        <div className="flex flex-col items-center justify-center w-full md:w-auto">
          <div className="mb-2 animate-fade-in-up delay-100">
            <h1 className="font-moana font-bold text-[2.8rem] md:text-7xl text-[#60a5fa] tracking-wide drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
              Mi primer añito
            </h1>
          </div>

          <div className="flex flex-col items-center justify-center space-y-1 animate-fade-in-up delay-200 mt-2 md:mt-4">
            <p className="text-[#3b4b56] font-sans font-normal text-sm md:text-xl tracking-wide">
              Te invitamos a celebrar con nosotros
            </p>
            <p className="text-[#3b4b56] font-sans font-normal text-sm md:text-xl tracking-wide">
              el primer añito de
            </p>
          </div>

          <div className="flex items-center justify-center gap-1 mb-2 mt-1 animate-fade-in-up delay-300 md:mt-4">
            <h2 className="font-moana font-bold text-[3.8rem] md:text-8xl text-[#f472b6] drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)] leading-tight text-center">
              Maily
            </h2>
          </div>

          <p className="text-[#3b4b56] mt-2 mb-4 md:mt-6 md:mb-4 text-[1.1rem] md:text-xl font-normal animate-fade-in-up delay-400">
            Faltan
          </p>

          <div className="bg-[#60a5fa] rounded-xl shadow-[0_4px_14px_rgba(96,165,250,0.4)] flex divide-x divide-white p-2 mb-6 animate-fade-in-up delay-500 w-fit">
            <div className="flex flex-col items-center justify-center w-20 md:w-24 py-1">
              <span className="text-3xl md:text-4xl font-bold text-white tracking-wide">
                {timeLeft.dias}
              </span>
              <span className="text-[12px] md:text-[13px] text-white font-medium mt-0.5 tracking-wider capitalize">
                Días
              </span>
            </div>
            <div className="flex flex-col items-center justify-center w-16 md:w-20 py-1">
              <span className="text-3xl md:text-4xl font-bold text-white tracking-wide">
                {timeLeft.horas}
              </span>
              <span className="text-[12px] md:text-[13px] text-white font-medium mt-0.5 tracking-wider capitalize">
                Hr
              </span>
            </div>
            <div className="flex flex-col items-center justify-center w-16 md:w-20 py-1">
              <span className="text-3xl md:text-4xl font-bold text-white tracking-wide">
                {timeLeft.minutos}
              </span>
              <span className="text-[12px] md:text-[13px] text-white font-medium mt-0.5 tracking-wider capitalize">
                Min
              </span>
            </div>
            <div className="flex flex-col items-center justify-center w-16 md:w-20 py-1">
              <span className="text-3xl md:text-4xl font-bold text-white tracking-wide">
                {timeLeft.segundos}
              </span>
              <span className="text-[12px] md:text-[13px] text-white font-medium mt-0.5 tracking-wider capitalize">
                Seg
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
