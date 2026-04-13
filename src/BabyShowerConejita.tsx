import { useState, useEffect } from "react";

const EVENT_DATE = new Date("April 30, 2026 15:00:00").getTime();

export default function BabyShowerConejita() {
  useEffect(() => {
    document.title = "Baby Shower - Conejita";
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
    <div className="flex flex-col items-center justify-center min-h-[100vh] w-full p-4 text-center overflow-hidden font-sans">
      <div className="relative w-80 h-80 md:w-116 md:h-116 flex-shrink-0 animate-fade-in-up">
        <img
          src="/conejita.png"
          alt="Conejita"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="mb-2 animate-fade-in-up delay-100">
        <h1 className="font-cursive font-bold text-[2.2rem] md:text-5xl text-brand-pink tracking-wide drop-shadow-sm">
          Mi Baby Shower
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center -mt-2 space-y-1 mb-3 animate-fade-in-up delay-200 mt-2">
        <p className="text-[#696969] font-sans font-normal text-sm md:text-base tracking-wide">
          Te invitamos a celebrar con nosotros
        </p>
        <p className="text-[#696969] font-sans font-normal text-sm md:text-base tracking-wide">
          la llegada de
        </p>
      </div>

      <div className="flex items-center justify-center gap-1 mb-2 animate-fade-in-up delay-300">
        <h2 className="font-cursive font-bold text-[3.25rem] md:text-7xl text-brand-pink drop-shadow-sm leading-tight">
          Ailany Kaelis
        </h2>
      </div>

      <p className="text-[#6d6d6d] mt-2 mb-4 text-[1.1rem] md:text-xl font-normal animate-fade-in-up delay-400">
        Faltan
      </p>

      <div className="bg-[#ef93b4] rounded-xl shadow-[0_4px_14px_rgba(235,119,157,0.3)] flex divide-x divide-white p-2 mb-6 animate-fade-in-up delay-500">
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
  );
}
